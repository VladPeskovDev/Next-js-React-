import { findOrphans, validateRelated } from '../src/lib/links';

const { ok, errors } = validateRelated();
const orphans = findOrphans();

let failed = false;

if (!ok) {
  console.error('❌ Broken related refs:');
  for (const e of errors) console.error('  - ' + e);
  failed = true;
} else {
  console.log('✅ Related refs: all valid');
}

if (orphans.length > 0) {
  console.warn(`⚠️  Orphans (no backlinks): ${orphans.length}`);
  for (const o of orphans) console.warn('  - ' + o.url);
} else {
  console.log('✅ No orphans');
}

process.exit(failed ? 1 : 0);
