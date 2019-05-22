# Angular Template Library with Demo Web Project

## Steps Used to Create this Project

1. Create the Template Project

```
ng new template-lib-with-demo --create-application=false
```

2. Create the Library Project

```
cd template-lib-with-demo
ng generate library template-lib --prefix=template-lib
```
3. Create the Demo Web Application

ng generate application template-demo --prefix=template-demo

4. Ensure Projects Build and Serve Successfuly

ng build template-lib
ng serve template-demo

5. Add Scripts to Top Level package.json

"scripts": {
  "build_lib": "ng build template-library",
  "copy-license": "copy .\\LICENSE .\\dist\\template-lib",
  "copy-readme": "copy .\\README.md .\\dist\\template-lib",
  "copy-files": "npm run copy-license && npm run copy-readme",
  "npm-pack": "cd dist/template-lib && npm pack",
  "package": "npm run build_lib && npm run copy-files && npm run npm_pack",
},


6. To Package the NPM Package
```
npm run package
```