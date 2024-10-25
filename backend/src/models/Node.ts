// models/Node.ts
export class Node {
  type: string;
  left?: Node;
  right?: Node;
  value?: any;
  arguments: any[];

  constructor(
    type: string,
    left?: Node,
    right?: Node,
    value?: any,
    args: any[] = []
  ) {
    this.type = type;
    this.left = left;
    this.right = right;
    this.value = value;
    this.arguments = args;
  }
}
