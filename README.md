## 리액트 네이티브 프로젝트 시작

    ```jsx
     npx react-native@latest init <폴더이른>
    ```

## 깃 설치

    ```jsx
    git init
    ```

## react-native-rename[https://github.com/junedomingo/react-native-rename#readme]

```
yarn add react-native-rename

1. git checkout -b rename-app
2. npx react-native-rename <newName>
3. npx react-native-rename "Travel App" -b com.<bundleIdentifier>
bundleIdentifier example: junedomingo.travelapp

프로젝트 이름을 바꿔주는 라이브러리 이고 안드로이드와 ios의 번들 아이디도 바꿔준다.

```

## [react-native-gifted-chat[](https://github.com/GCC-Group/gcc-chat-app#react-native-gifted-chathttpsgithubcomfaridsafireact-native-gifted-chat)https://github.com/FaridSafi/react-native-gifted-chat] 채팅용 인터페이스를 쉽게 만들수 있는 라이브러리

```
yarn add react-native-gifted-chat

```

## @react-native-firebase/app[https://rnfirebase.io/]

```
1. yarn add @react-native-firebase/app
   파이어베이스 라이브러리 설치 ( 기본 )

 a. setup -> android setup ( add key )
 b. setup -> ios setup ( add key )


2. yarn add @react-native-firebase/firestore
   파이어스토어 라이브러리 설치 ( 기본 )


3. yarn add @react-native-firebase/auth
   Firebase의 Authentication 서비스를 React Native 앱에 통합하기 위한 모듈

```

## setting up eslint-prettier-husky[https://dev-yakuza.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/]

yarn add eslint -D

npx eslint --init

- answer questions like link

yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks

modify .eslintrc.js - like link

add scripts for lint in package.json - "lint": "eslint --ext .tsx --ext .ts src/",

can fix all lint errors: # npx eslint . --fix
npx eslint ./src/\*_/_.tsx --fix

- modify config file to include .eslintrc file and project files
  - "include": ["./.eslintrc.js", "./src/**/*"],

React Native 프로젝트에서 코드 스타일과 코드 품질을 관리하기 위해 `eslint`, `prettier`, 그리고 `husky`를 설정하는 과정입니다.

1. **ESLint**:

   - JavaScript와 TypeScript 코드의 문법적 오류나 스타일 관련 문제를 검사하기 위한 도구입니다.
   - 프로젝트에 적용하면 코드의 품질을 일관되게 유지할 수 있습니다.

2. **Prettier**:

   - 코드 포맷터로, 코드를 일관된 스타일로 자동 정렬해주는 도구입니다.
   - ESLint와 함께 사용될 때, 코드 스타일과 문법적 오류를 동시에 관리할 수 있습니다.

3. **Husky**:
   - Git 훅을 쉽게 설정할 수 있게 해주는 도구입니다.
   - 예를 들어, 커밋 전에 ESLint 검사를 자동으로 실행하도록 설정할 수 있습니다.

설치 및 설정 과정:

1. **ESLint 설치**:

   ```
   yarn add eslint -D
   ```

   `-D` 플래그는 개발 의존성으로 패키지를 설치하겠다는 것을 의미합니다.

2. **ESLint 초기화**:

   ```
   npx eslint --init
   ```

   이 명령을 실행하면 ESLint 설정을 위한 여러 질문에 답하게 됩니다.
   아래의 사이트에서 따라 선택 하면된다. GCC 에서는 세미콜론 질문은 No로 선택한다.  
   [https://dev-yakuza.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/]

3. **필요한 플러그인 설치**:

   ```
   yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks
   ```

   - `eslint-plugin-react`: React와 관련된 linting 규칙을 제공합니다.
   - `@typescript-eslint/eslint-plugin`와 `@typescript-eslint/parser`: TypeScript와 관련된 linting 규칙을 제공합니다.
   - `eslint-plugin-react-hooks`: React Hooks와 관련된 linting 규칙을 제공합니다.

4. **.eslintrc.js 수정**:

   - 해당 링크의 내용대로 `.eslintrc.js` 파일을 수정해야 합니다.

5. **lint 스크립트 추가**:

   - `package.json` 파일의 scripts 섹션에 다음을 추가합니다:
     ```json
     "lint": "eslint --ext .tsx --ext .ts src/"
     ```

6. **lint 오류 수정**:

   - 모든 lint 오류를 자동으로 수정하려면 다음 명령을 사용합니다:
     ```
     npx eslint ./src/**/*.tsx --fix
     ```

7. **config 파일 수정**:
   - 주어진 설정 파일(예: `tsconfig.json` 또는 다른 파일)에 다음 내용을 추가합니다:
     ```json
     "include": ["./.eslintrc.js", "./src/**/*"]
     ```

이렇게 설정한 후, 코드를 작성하거나 수정할 때마다 ESLint와 Prettier가 코드의 품질과 스타일을 확인하고 유지하게 됩니다. Husky를 설정하면 Git 커밋 전에 이러한 검사를 자동으로 수행하도록 설정할 수 있습니다.

##.prettierrc.js 파일에 추가하기 하고나면 자동으로 코드가 정렬되고 semi설정도 잘 나옴

```
module.exports = {
singleQuote: true,
trailingComma: 'all',
printWidth: 100,
semi: false,
}

```
