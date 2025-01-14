// place files you want to import through the `$lib` alias in this folder.
export async function fetchRepo() {
    const res = await fetch("https://raw.githubusercontent.com/CubeWhyMC/weave-index/refs/heads/master/index-by-developers.json")
    return res.json()
}
