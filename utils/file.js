import * as fs from 'fs';
import { promisify } from 'util';

export default class FileUtils {
    static read(ord) {
        return promisify(fs.read)(ord);
    }

    static write(ord) {
        return promisify(fs.writeFile)(ord);
    }
}