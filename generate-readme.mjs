// generate-readme.mjs
import fs from 'fs/promises';
import path from 'path';

const config = {
  projectDir: 'src/problems', 
  readmePath: 'README.md',    
  githubBase: 'https://github.com/zzydev/leetcode-solution/blob/main',
  leetcodeBase: 'https://leetcode.cn/problems',
  excludePattern: /\.test\./,
  skipFolders: ['__tests__'],
  readmeTemplate: `# Leetcode 题解索引

## 目录

%s

## 题解分类

%s
`
};

function camelToKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') 
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') 
    .toLowerCase(); 
}

function extractProblemInfo(filename) {
  const name = filename.replace(/\.(ts|js|mjs)$/, '');
  
  const leetcodeName = camelToKebab(name);
  
  return { name, leetcodeName, filename };
}

function generateProblemMarkdown(problemInfo, categoryPath) {
  if (!problemInfo) return '';
  
  const { name, leetcodeName, filename } = problemInfo;
  const githubPath = path.join(config.projectDir, categoryPath, filename);
  const githubLink = `[${filename}](${config.githubBase}/${githubPath})`;
  const leetcodeLink = `[Leetcode](${config.leetcodeBase}/${leetcodeName}/description/)`;
  
  return `- **${name}**  
  ${leetcodeLink} | ${githubLink}`;
}

function generateTableOfContents(categories) {
  return categories
    .map((category, index) => `${index + 1}. [${category.name}](#${category.slug})`)
    .join('\n');
}

function generateCategoriesMarkdown(categories) {
  return categories
    .map(category => {
      const problemsMarkdown = category.problems
        .map(problem => generateProblemMarkdown(problem, category.path))
        .join('\n');
      
      return `### ${category.name}\n\n${problemsMarkdown}\n\n`;
    })
    .join('');
}

async function collectProblems(dir, currentPath = '') {
  const categories = [];
  const problems = [];
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = currentPath ? path.join(currentPath, entry.name) : entry.name;
      
      if (entry.isDirectory() && config.skipFolders.includes(entry.name)) {
        continue;
      }
      
      if (entry.isDirectory()) {
        const subCategory = {
          name: entry.name,
          path: relativePath,
          slug: entry.name.toLowerCase().replace(/\s+/g, '-'),
          problems: []
        };
        
        const subCategories = await collectProblems(fullPath, relativePath);
        subCategory.problems = subCategories.flatMap(cat => cat.problems);
        categories.push(subCategory);
      } else if (entry.isFile() && !config.excludePattern.test(entry.name)) {
        const problemInfo = extractProblemInfo(entry.name);
        if (problemInfo) {
          problems.push(problemInfo);
        }
      }
    }
    
    if (problems.length > 0) {
      categories.push({
        name: currentPath || '未分类',
        path: currentPath,
        slug: (currentPath || 'uncategorized').toLowerCase().replace(/\s+/g, '-'),
        problems
      });
    }
  } catch (error) {
    console.error(`处理目录 ${dir} 时出错:`, error);
  }
  
  return categories;
}

async function main() {
  try {
    console.log('开始生成README...');
    
    const categories = await collectProblems(config.projectDir);
    
    if (categories.length > 0) {
      const tableOfContents = generateTableOfContents(categories);
      const categoriesMarkdown = generateCategoriesMarkdown(categories);
      
      const readmeContent = config.readmeTemplate
        .replace('%s', tableOfContents)
        .replace('%s', categoriesMarkdown);
      
      await fs.writeFile(config.readmePath, readmeContent);
      
      console.log(`README已生成: ${config.readmePath}`);
    } else {
      console.log('未找到符合条件的文件，无法生成README');
    }
  } catch (error) {
    console.error('脚本执行出错:', error);
    console.error('错误详情:', error.stack);
  }
}

// 执行主函数
main();