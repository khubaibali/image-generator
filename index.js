import { minidenticon } from 'minidenticons'
import * as url from 'url';
// console.log(process.argv[1])
// console.log(process.argv[2])
const avatar = minidenticon(process.argv[2]|| "", "50", "50")
console.log(avatar)
// return avatar