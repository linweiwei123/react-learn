export async function delayLoad(component: any) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(component), 300)
  })
}

export function isPromise(v: any) {
  return v && typeof v.then === 'function';
}
