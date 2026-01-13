# Development Notes

## GraphQL Module Duplication Issue

When developing this plugin locally or using it in a monorepo setup, you may encounter a "Cannot use GraphQLScalarType from another module or realm" error. This is a known issue with the GraphQL library when multiple instances exist in the dependency tree.

### Workaround for Testing

1. **Use yarn with resolutions** (recommended):
   ```json
   {
     "resolutions": {
       "graphql": "^16.8.1"
     }
   }
   ```

2. **Use npm with overrides** (npm 8.3+):
   ```json
   {
     "overrides": {
       "graphql": "^16.8.1"
     }
   }
   ```

3. **Use pnpm with resolution**:
   ```yaml
   pnpm:
     overrides:
       graphql: ^16.8.1
   ```

### For Published Package Users

Once this package is published to npm and installed normally (not via symlink or local path), this issue should not occur as npm will deduplicate the graphql dependency automatically.

## Building the Plugin

```bash
npm install
npm run build
```

## Testing the Plugin

The `example/generated/graphql.ts` file shows the expected output format that the plugin generates.

## Example Output

The plugin generates:
- Typed query hooks: `useCreateGetUsers`, `useCreateGetUser`
- Typed mutation hooks: `useCreateCreateUser`, `useCreateUpdateUser`  
- Typed subscription hooks: `useCreateOnUserUpdated`
- All hooks are fully typed with TypeScript generics
- Compatible with SolidJS reactivity system

Each hook wraps the corresponding `createQuery`, `createMutation`, or `createSubscription` from solid-urql.
