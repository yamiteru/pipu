---
id: "modules"
title: "pipem"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### all

▸ **all**<`T`\>(...`ps`): (`data`: `T`) => `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...ps` | (`data`: `T`) => `boolean`[] |

#### Returns

`fn`

▸ (`data`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`undefined` \| `T`

#### Defined in

[utils.ts:107](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L107)

___

### and

▸ **and**<`T`\>(...`ps`): (`data`: `T`) => `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...ps` | (`data`: `T`) => `boolean`[] |

#### Returns

`fn`

▸ (`data`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`undefined` \| `T`

#### Defined in

[utils.ts:164](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L164)

___

### append

▸ **append**<`T`\>(`value`): (`data`: `T`[]) => `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`fn`

▸ (`data`): `T`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[] |

##### Returns

`T`[]

#### Defined in

[utils.ts:87](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L87)

___

### at

▸ **at**(`i`): (`v`: `unknown`[]) => `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`fn`

▸ (`v`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown`[] |

##### Returns

`unknown`

#### Defined in

[utils.ts:28](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L28)

___

### both

▸ **both**<`T`\>(`p1`, `p2`): (`data`: `T`) => `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | (`data`: `T`) => `boolean` |
| `p2` | (`data`: `T`) => `boolean` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`undefined` \| `T`

#### Defined in

[utils.ts:101](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L101)

___

### call

▸ **call**<`T`\>(`method`, ...`props`): (`value`: `T`) => `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `...props` | `unknown`[] |

#### Returns

`fn`

▸ (`value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`any`

#### Defined in

[utils.ts:69](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L69)

___

### decrement

▸ **decrement**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

#### Returns

`number`

#### Defined in

[utils.ts:10](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L10)

___

### divide

▸ **divide**(`n`): (`data`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`number`

#### Defined in

[utils.ts:46](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L46)

___

### either

▸ **either**<`T`\>(`p1`, `p2`): (`data`: `T`) => `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | (`data`: `T`) => `boolean` |
| `p2` | (`data`: `T`) => `boolean` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`undefined` \| `T`

#### Defined in

[utils.ts:95](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L95)

___

### entries

▸ **entries**<`T`\>(`obj`): [`string`, `unknown`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

[`string`, `unknown`][]

#### Defined in

[utils.ts:120](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L120)

___

### eq

▸ **eq**(`n`): (`data`: `number`) => `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`undefined` \| `number`

#### Defined in

[utils.ts:64](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L64)

___

### filter

▸ **filter**<`T`\>(`p`): (`data`: `T`) => `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | (`data`: `T`) => `boolean` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`undefined` \| `T`

#### Defined in

[utils.ts:21](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L21)

___

### flatten

▸ **flatten**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`any`

#### Defined in

[utils.ts:70](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L70)

___

### flip

▸ **flip**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`any`

#### Defined in

[utils.ts:70](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L70)

___

### gt

▸ **gt**(`n`): (`data`: `number`) => `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`undefined` \| `number`

#### Defined in

[utils.ts:58](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L58)

___

### gte

▸ **gte**(`n`): (`data`: `number`) => `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`undefined` \| `number`

#### Defined in

[utils.ts:56](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L56)

___

### has

▸ **has**<`K`\>(`key`): (`data`: `Record`<`string` \| `K`, `unknown`\>) => `undefined` \| `Record`<`string` \| `K`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `Record`<`string` \| `K`, `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string` \| `K`, `unknown`\> |

##### Returns

`undefined` \| `Record`<`string` \| `K`, `unknown`\>

#### Defined in

[utils.ts:73](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L73)

___

### ifElse

▸ **ifElse**<`T`, `O1`, `O2`\>(`p`, `o1`, `o2`): (`data`: `T`) => `O1` \| `O2`

#### Type parameters

| Name |
| :------ |
| `T` |
| `O1` |
| `O2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | (`data`: `T`) => `boolean` |
| `o1` | (`data`: `T`) => `O1` |
| `o2` | (`data`: `T`) => `O2` |

#### Returns

`fn`

▸ (`data`): `O1` \| `O2`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`O1` \| `O2`

#### Defined in

[utils.ts:13](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L13)

___

### increment

▸ **increment**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

#### Returns

`number`

#### Defined in

[utils.ts:10](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L10)

___

### keys

▸ **keys**<`T`\>(`obj`): `string`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`string`[]

#### Defined in

[utils.ts:130](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L130)

___

### lt

▸ **lt**(`n`): (`data`: `number`) => `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`undefined` \| `number`

#### Defined in

[utils.ts:62](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L62)

___

### lte

▸ **lte**(`n`): (`data`: `number`) => `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`undefined` \| `number`

#### Defined in

[utils.ts:60](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L60)

___

### map

▸ **map**<`I`, `O`\>(`f`): (`data`: `I`) => `O`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `I` |
| `O` | `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`data`: `I`) => `O` |

#### Returns

`fn`

▸ (`data`): `O`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `I` |

##### Returns

`O`

#### Defined in

[utils.ts:10](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L10)

___

### minus

▸ **minus**(`n`): (`data`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`number`

#### Defined in

[utils.ts:52](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L52)

___

### multiply

▸ **multiply**(`n`): (`data`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`number`

#### Defined in

[utils.ts:44](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L44)

___

### neq

▸ **neq**(`n`): (`data`: `number`) => `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`undefined` \| `number`

#### Defined in

[utils.ts:66](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L66)

___

### omit

▸ **omit**<`T`\>(`keys`): (`data`: `Record`<`string`, `unknown`\>) => `Record`<`string`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `T` |

#### Returns

`fn`

▸ (`data`): `Record`<`string`, `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `unknown`\> |

##### Returns

`Record`<`string`, `unknown`\>

#### Defined in

[utils.ts:149](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L149)

___

### or

▸ **or**<`T`\>(...`ps`): (`data`: `T`) => `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...ps` | (`data`: `T`) => `boolean`[] |

#### Returns

`fn`

▸ (`data`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`undefined` \| `T`

#### Defined in

[utils.ts:175](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L175)

___

### pick

▸ **pick**<`T`\>(`keys`): (`data`: `Record`<`string`, `unknown`\>) => `Record`<`string`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `T` |

#### Returns

`fn`

▸ (`data`): `Record`<`string`, `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `unknown`\> |

##### Returns

`Record`<`string`, `unknown`\>

#### Defined in

[utils.ts:135](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L135)

___

### pipe

▸ **pipe**<`A`, `B`\>(`ab`): `PipeReturn`<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |

#### Returns

`PipeReturn`<`A`, `B`\>

#### Defined in

[pipe.ts:30](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L30)

▸ **pipe**<`A`, `B`, `C`\>(`ab`, `bc`): `PipeReturn`<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |

#### Returns

`PipeReturn`<`A`, `C`\>

#### Defined in

[pipe.ts:31](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L31)

▸ **pipe**<`A`, `B`, `C`, `D`\>(`ab`, `bc`, `cd`): `PipeReturn`<`A`, `D`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |

#### Returns

`PipeReturn`<`A`, `D`\>

#### Defined in

[pipe.ts:35](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L35)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`ab`, `bc`, `cd`, `de`): `PipeReturn`<`A`, `E`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |

#### Returns

`PipeReturn`<`A`, `E`\>

#### Defined in

[pipe.ts:40](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L40)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`ab`, `bc`, `cd`, `de`, `ef`): `PipeReturn`<`A`, `F`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |

#### Returns

`PipeReturn`<`A`, `F`\>

#### Defined in

[pipe.ts:46](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L46)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`): `PipeReturn`<`A`, `G`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |

#### Returns

`PipeReturn`<`A`, `G`\>

#### Defined in

[pipe.ts:53](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L53)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): `PipeReturn`<`A`, `H`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |

#### Returns

`PipeReturn`<`A`, `H`\>

#### Defined in

[pipe.ts:61](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L61)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): `PipeReturn`<`A`, `I`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |

#### Returns

`PipeReturn`<`A`, `I`\>

#### Defined in

[pipe.ts:70](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L70)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): `PipeReturn`<`A`, `J`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |

#### Returns

`PipeReturn`<`A`, `J`\>

#### Defined in

[pipe.ts:80](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L80)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`): `PipeReturn`<`A`, `K`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |

#### Returns

`PipeReturn`<`A`, `K`\>

#### Defined in

[pipe.ts:91](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L91)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`): `PipeReturn`<`A`, `L`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |

#### Returns

`PipeReturn`<`A`, `L`\>

#### Defined in

[pipe.ts:103](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L103)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`): `PipeReturn`<`A`, `M`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |

#### Returns

`PipeReturn`<`A`, `M`\>

#### Defined in

[pipe.ts:116](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L116)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`): `PipeReturn`<`A`, `N`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |

#### Returns

`PipeReturn`<`A`, `N`\>

#### Defined in

[pipe.ts:130](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L130)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`): `PipeReturn`<`A`, `O`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |

#### Returns

`PipeReturn`<`A`, `O`\>

#### Defined in

[pipe.ts:145](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L145)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`): `PipeReturn`<`A`, `P`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |

#### Returns

`PipeReturn`<`A`, `P`\>

#### Defined in

[pipe.ts:161](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L161)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`): `PipeReturn`<`A`, `Q`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |

#### Returns

`PipeReturn`<`A`, `Q`\>

#### Defined in

[pipe.ts:178](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L178)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`): `PipeReturn`<`A`, `R`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |

#### Returns

`PipeReturn`<`A`, `R`\>

#### Defined in

[pipe.ts:196](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L196)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`): `PipeReturn`<`A`, `S`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |

#### Returns

`PipeReturn`<`A`, `S`\>

#### Defined in

[pipe.ts:215](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L215)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`): `PipeReturn`<`A`, `T`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |
| `st` | `PipeFn`<`S`, `T`\> |

#### Returns

`PipeReturn`<`A`, `T`\>

#### Defined in

[pipe.ts:235](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L235)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`): `PipeReturn`<`A`, `U`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |
| `st` | `PipeFn`<`S`, `T`\> |
| `tu` | `PipeFn`<`T`, `U`\> |

#### Returns

`PipeReturn`<`A`, `U`\>

#### Defined in

[pipe.ts:277](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L277)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`, `uv`): `PipeReturn`<`A`, `V`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |
| `U` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |
| `st` | `PipeFn`<`S`, `T`\> |
| `tu` | `PipeFn`<`T`, `U`\> |
| `uv` | `PipeFn`<`U`, `V`\> |

#### Returns

`PipeReturn`<`A`, `V`\>

#### Defined in

[pipe.ts:321](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L321)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`, `uv`, `vw`): `PipeReturn`<`A`, `W`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |
| `U` |
| `V` |
| `W` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |
| `st` | `PipeFn`<`S`, `T`\> |
| `tu` | `PipeFn`<`T`, `U`\> |
| `uv` | `PipeFn`<`U`, `V`\> |
| `vw` | `PipeFn`<`V`, `W`\> |

#### Returns

`PipeReturn`<`A`, `W`\>

#### Defined in

[pipe.ts:367](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L367)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`, `uv`, `vw`, `wx`): `PipeReturn`<`A`, `X`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |
| `U` |
| `V` |
| `W` |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |
| `st` | `PipeFn`<`S`, `T`\> |
| `tu` | `PipeFn`<`T`, `U`\> |
| `uv` | `PipeFn`<`U`, `V`\> |
| `vw` | `PipeFn`<`V`, `W`\> |
| `wx` | `PipeFn`<`W`, `X`\> |

#### Returns

`PipeReturn`<`A`, `X`\>

#### Defined in

[pipe.ts:415](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L415)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`, `uv`, `vw`, `wx`, `xy`): `PipeReturn`<`A`, `Y`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |
| `U` |
| `V` |
| `W` |
| `X` |
| `Y` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |
| `st` | `PipeFn`<`S`, `T`\> |
| `tu` | `PipeFn`<`T`, `U`\> |
| `uv` | `PipeFn`<`U`, `V`\> |
| `vw` | `PipeFn`<`V`, `W`\> |
| `wx` | `PipeFn`<`W`, `X`\> |
| `xy` | `PipeFn`<`X`, `Y`\> |

#### Returns

`PipeReturn`<`A`, `Y`\>

#### Defined in

[pipe.ts:465](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L465)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`, `uv`, `vw`, `wx`, `xy`, `yz`): `PipeReturn`<`A`, `Z`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |
| `M` |
| `N` |
| `O` |
| `P` |
| `Q` |
| `R` |
| `S` |
| `T` |
| `U` |
| `V` |
| `W` |
| `X` |
| `Y` |
| `Z` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | `PipeFn`<`A`, `B`\> |
| `bc` | `PipeFn`<`B`, `C`\> |
| `cd` | `PipeFn`<`C`, `D`\> |
| `de` | `PipeFn`<`D`, `E`\> |
| `ef` | `PipeFn`<`E`, `F`\> |
| `fg` | `PipeFn`<`F`, `G`\> |
| `gh` | `PipeFn`<`G`, `H`\> |
| `hi` | `PipeFn`<`H`, `I`\> |
| `ij` | `PipeFn`<`I`, `J`\> |
| `jk` | `PipeFn`<`J`, `K`\> |
| `kl` | `PipeFn`<`K`, `L`\> |
| `lm` | `PipeFn`<`L`, `M`\> |
| `mn` | `PipeFn`<`M`, `N`\> |
| `no` | `PipeFn`<`N`, `O`\> |
| `op` | `PipeFn`<`O`, `P`\> |
| `pq` | `PipeFn`<`P`, `Q`\> |
| `qr` | `PipeFn`<`Q`, `R`\> |
| `rs` | `PipeFn`<`R`, `S`\> |
| `st` | `PipeFn`<`S`, `T`\> |
| `tu` | `PipeFn`<`T`, `U`\> |
| `uv` | `PipeFn`<`U`, `V`\> |
| `vw` | `PipeFn`<`V`, `W`\> |
| `wx` | `PipeFn`<`W`, `X`\> |
| `xy` | `PipeFn`<`X`, `Y`\> |
| `yz` | `PipeFn`<`Y`, `Z`\> |

#### Returns

`PipeReturn`<`A`, `Z`\>

#### Defined in

[pipe.ts:517](https://github.com/yamiteru/pipem/blob/fbfc63f/src/pipe.ts#L517)

___

### plus

▸ **plus**(`n`): (`data`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`data`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

##### Returns

`number`

#### Defined in

[utils.ts:48](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L48)

___

### prepend

▸ **prepend**<`T`\>(`value`): (`data`: `T`[]) => `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`fn`

▸ (`data`): `T`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[] |

##### Returns

`T`[]

#### Defined in

[utils.ts:83](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L83)

___

### regex

▸ **regex**(`pattern`): (`data`: `string`) => `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `RegExp` |

#### Returns

`fn`

▸ (`data`): `undefined` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

##### Returns

`undefined` \| `string`

#### Defined in

[utils.ts:91](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L91)

___

### tap

▸ **tap**<`T`\>(`f`): (`data`: `T`) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`data`: `T`) => `void` |

#### Returns

`fn`

▸ (`data`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`T`

#### Defined in

[utils.ts:38](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L38)

___

### toFloat

▸ **toFloat**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`number`

#### Defined in

[utils.ts:36](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L36)

___

### toInt

▸ **toInt**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`number`

#### Defined in

[utils.ts:34](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L34)

___

### toNumber

▸ **toNumber**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`number`

#### Defined in

[utils.ts:32](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L32)

___

### toString

▸ **toString**(`v`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`string`

#### Defined in

[utils.ts:30](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L30)

___

### values

▸ **values**<`T`\>(`obj`): `unknown`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`unknown`[]

#### Defined in

[utils.ts:125](https://github.com/yamiteru/pipem/blob/fbfc63f/src/utils.ts#L125)
