let vrb = true;
console.log(`Variable: ${vrb} | Type: ${typeof(vrb)}`);

vrb = Number(vrb);
console.log(`Variable: ${vrb} | Type: ${typeof(vrb)}`);

vrb = vrb.toString();
console.log(`Variable: ${vrb} | Type: ${typeof(vrb)}`);

vrb = Boolean(vrb);
console.log(`Variable: ${vrb} | Type: ${typeof(vrb)}`);