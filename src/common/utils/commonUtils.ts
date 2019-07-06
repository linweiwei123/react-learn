export async function delayLoad(component: any) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(component), 1000)
  })
}