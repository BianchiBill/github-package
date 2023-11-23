export class Hello {
  async hello(name: string): Promise<string> {
    const str = `retornando ${name}`
    return str;
  }
}

export { Hello as default };
