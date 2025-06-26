export function simplifyPath(path: string): string {
  let res = '';
  let name = '';
  if (path.charAt(path.length - 1) !== '/') {
    path += '/';
  }

  for (const c of path) {
    if (c !== '/') {
      name += c;
    } else {
      if (name === '..') {
        while (res.length > 0 && res.charAt(res.length - 1) !== '/') {
          res = res.slice(0, -1);
        }
        if (res.length > 0) {
          res = res.slice(0, -1);
        }
      } else if (name !== '.' && name !== '') {
        res += `/${name}`;
      }
      name = '';
    }
  }
  if (res === '') {
    res = '/';
  }
  return res;
}
