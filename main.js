#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const executablePath = path.dirname(process.argv[1])
const assetsPath = path.join(executablePath, 'assets')

const targetPath = process.cwd()

fs.cp(assetsPath, targetPath, { recursive: true }, (err) => {
  if (!err) return
  console.error(err)
  process.exit(1)
})
