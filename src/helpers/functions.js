/**
 *
 * @param branch
 * @param files
 * @returns {`https://codesandbox.io/embed/github/Aka-The-Archivist/aka.backend/main?module=${string}&autoresize=1&moduleview=1&hidenavigation=1&editorsize=100&expanddevtools=1&theme=dark&view=split&previewwindow=console`}
 */
export const iFrameSendBox = (branch = 'main', ...files) => {

    return `https://codesandbox.io/embed/github/Aka-The-Archivist/aka.backend/${branch}?module=${files.join(',')}&autoresize=1&moduleview=1&hidenavigation=1&editorsize=100&expanddevtools=1&theme=dark&view=split&previewwindow=console`
}

/**
 *
 * @param args
 * @returns {Promise<any>}
 */
export const fetcher = (...args) => fetch(...args).then(res => res.json())