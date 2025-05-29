import { describe, expect, it } from 'vitest';
import { simplifyPath } from '@/problems/String/simplifyPath';

describe('simplifyPath', () => {
  it('should handle root path', () => {
    expect(simplifyPath('/')).toBe('/');
  });

  it('should simplify path with single directory', () => {
    expect(simplifyPath('/home/')).toBe('/home');
    expect(simplifyPath('/user')).toBe('/user');
  });

  it('should handle multiple directories', () => {
    expect(simplifyPath('/home/user/docs/')).toBe('/home/user/docs');
    expect(simplifyPath('/a/b/c')).toBe('/a/b/c');
  });

  it('should handle "." correctly', () => {
    expect(simplifyPath('/./')).toBe('/');
    expect(simplifyPath('/home/./docs')).toBe('/home/docs');
    expect(simplifyPath('/a/./b/./c')).toBe('/a/b/c');
  });

  it('should handle ".." correctly', () => {
    expect(simplifyPath('/home/..')).toBe('/');
    expect(simplifyPath('/home/../user')).toBe('/user');
    expect(simplifyPath('/a/b/../c')).toBe('/a/c');
    expect(simplifyPath('/a/b/../../c')).toBe('/c');
  });

  it('should handle consecutive slashes', () => {
    expect(simplifyPath('///')).toBe('/');
    expect(simplifyPath('/home//user')).toBe('/home/user');
    expect(simplifyPath('/a//b//c')).toBe('/a/b/c');
  });

  it('should handle mixed cases', () => {
    expect(simplifyPath('/home/.././docs/')).toBe('/docs');
    expect(simplifyPath('/a/./b/../../c/')).toBe('/c');
    expect(simplifyPath('/a/../../b/../c//.//')).toBe('/c');
  });

  it('should handle edge cases', () => {
    expect(simplifyPath('/../')).toBe('/'); // Trying to go above root
    expect(simplifyPath('/...')).toBe('/...'); // "..." is a valid directory name
    expect(simplifyPath('/..hidden')).toBe('/..hidden'); // Valid directory name
  });

  it('should handle empty input', () => {
    expect(simplifyPath('')).toBe('/');
  });

  it('should handle complex paths', () => {
    expect(simplifyPath('/home/foo/../../bar')).toBe('/bar');
    expect(simplifyPath('/a/./b/../../c/d/../e')).toBe('/c/e');
    expect(simplifyPath('/a/../../b/../c/../')).toBe('/');
  });
});
