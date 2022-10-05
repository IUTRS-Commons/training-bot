const fs = require('fs')

/**
 * @param { string } path
 * @param { boolean } subFiles
 */

export function loadFiles(path: string, subFiles: boolean) {
    /**
     * [dir] commands
     * | [dir] categories
     * | [dir] developer
     *   | ping.js
     *   | status.js
     * | [dir] movies
     *   | [dir] display
     *     | showList.js
     *     | showMovie.js
     *   | [dir] manage
     *     | addMovie.js
     *     | removeMovie.js
     * | help.js
     */

    const files: string[] = []

    fs.readdirSync(path).forEach((file: string) => {
        if (subFiles && isDirectory(`${path}/${file}`)) loadFiles(`${path}/${file}/`, subFiles).forEach(f => files.push(`${file}/${f}`))
        else if (isJSFile(file)) files.push(file)
    })

    return files
}

/**
 * @param { string } path
 */
export function isDirectory(path: string) {
    return fs.lstatSync(path).isDirectory()
}

/**
 * @param { string } path
 * @returns { boolean }
 */
export function isJSFile(path: string) {
    return path.endsWith('.js')
}
