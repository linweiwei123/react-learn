export async function delayLoad(component: any) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(component), 1000)
  })
}

export function isPromise(v: any) {
  return v && typeof v.then === 'function';
}
