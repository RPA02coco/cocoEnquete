const replaced = (val) => {
  return (
    val.replace(/[０-９．]/g, (str) => {
      return String.fromCharCode(str.charCodeAt(0) - 65248);
    })
      .replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-')
  )
}

export default replaced;