export class Seccion {
  constructor(
    public title: string,
    public elements: string[]
  ) {}
}
export class Carta {
  public constructor(
      public title: string,
      public secciones: Seccion[]
    ) { }
}


