export default function () {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        //  바벨이 만든 AST 노드를 출력한다.
        console.log("Identifier() name:", name);
        // 변환 작업: 코드 문자열을 역순으로 변환한다.
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split("").reverse().join("");
      },
      // https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-block-scoping/src/index.js#L26
      VariableDeclaration(path) {
        console.log("VariableDeclaration() kind:", path.node.kind); // const

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
}
