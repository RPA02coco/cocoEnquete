const replaced = (rawValue) => {
  return (
    rawValue.replace(/[０-９．]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    })
      .replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-')
  )
}

export default replaced;