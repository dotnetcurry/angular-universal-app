export class Pokemon {
  name: string;
  id: number;
  types = [];
  stats = [];
  sprites: Sprite[] = [];
  imageurl: string;
}

export class Sprite {
  name: string;
  imagePath: string;
}