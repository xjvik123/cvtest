import * as fs from 'fs';
import * as yaml from 'js-yaml';

export function readYamlFile(filePath: string): any {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch (e) {
    console.error(`Error reading YAML file ${filePath}: ${e}`);
    return null;
  }
}
