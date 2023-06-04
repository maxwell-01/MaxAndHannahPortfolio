import path from 'path';

export function combinePaths(...segments: string[]): string {
  return path.join(...segments);
}
