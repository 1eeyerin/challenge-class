module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: [
    "react-refresh",
    //import 관련 규칙 추가
    "import",
    "unused-imports",
    "prettier",
  ],
  rules: {
    // eslint-plugin-import 사용으로 인한 styled-components 불러오기시 에러 발생
    "import/no-named-as-default": "off",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          // 내장 모듈
          "builtin",
          // npm을 통해 설치된 외부 모듈
          "external",
          // 프로젝트 내부에서 설정한 경로 별칭을 사용하는 모듈
          "internal",
          // 상위 디렉토리에 있는 모듈
          "parent",
          // 같은 디렉토리에 있는 모듈
          "sibling",
          // 같은 디렉토리의 index 파일
          "index",
        ],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/hooks{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/schemas{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/utils{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/constants{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/pages{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/components{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/styles{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/svg{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        // pathGroups 규칙을 적용하지 않을 import 타입을 설정
        pathGroupsExcludedImportTypes: [],
        // 임포트 그룹 사이 개행 여부
        "newlines-between": "never",
        alphabetize: {
          // 알파벳 순서대로 정렬
          order: "asc",
          // 대소문자 구분 없이 정렬
          caseInsensitive: true,
        },
      },
    ],
  },
};
