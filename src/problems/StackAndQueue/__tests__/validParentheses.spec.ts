import { describe, expect, it } from 'vitest';
import { isValid } from '@/problems/StackAndQueue/validParentheses';

describe('isValid', () => {
  it('应返回 true 对于空字符串', () => {
    expect(isValid('')).toBe(true);
  });

  it('应识别简单匹配括号', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('[]')).toBe(true);
    expect(isValid('{}')).toBe(true);
  });

  it('应识别混合匹配括号', () => {
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('{[]}')).toBe(true);
    expect(isValid('([{}])')).toBe(true);
  });

  it('应识别不匹配括号', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[}]')).toBe(false);
  });

  it('应处理只有左括号的情况', () => {
    expect(isValid('(')).toBe(false);
    expect(isValid('[{')).toBe(false);
    expect(isValid('(((')).toBe(false);
  });

  it('应处理只有右括号的情况', () => {
    expect(isValid(')')).toBe(false);
    expect(isValid(']}')).toBe(false);
    expect(isValid('}}}')).toBe(false);
  });

  it('应处理复杂嵌套情况', () => {
    expect(isValid('(([]){})')).toBe(true);
    expect(isValid('{[()()]}')).toBe(true);
    expect(isValid('({[([{}])]})')).toBe(true);
  });

  it('应处理长字符串', () => {
    const longValid = '({[]})'.repeat(1000);
    expect(isValid(longValid)).toBe(true);

    const longInvalid = '({[}])'.repeat(1000);
    expect(isValid(longInvalid)).toBe(false);
  });

  it('应处理非括号字符', () => {
    expect(isValid('(a)')).toBe(false);
    expect(isValid('1+2*(3-4)')).toBe(false);
    expect(isValid('a{b}c[d]e(f)g')).toBe(false);
  });

  it('应处理边界情况', () => {
    expect(isValid(' ')).toBe(false); // 只有空格
    expect(isValid('\n\t')).toBe(false); // 空白字符
    expect(isValid('() ')).toBe(false); // 有效但包含空格
  });
});
