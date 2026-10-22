import chalk from 'chalk'

import { runShell } from '@prisma-multi-tenant-v3/shared'

import { Command } from '../types'
import { useYarn } from '../helpers/misc'

class Eject implements Command {
  name = 'eject'
  args = []
  description = 'Eject prisma-multi-tenant from your application'

  async execute() {
    console.log(chalk`\n  {yellow Ejecting \`prisma-multi-tenant\` from your app...}`)

    const yarnOrNpm = (await useYarn()) ? 'yarn remove' : 'npm uninstall'

    await runShell(`${yarnOrNpm} @prisma-multi-tenant-v3/client`)

    console.log(
      chalk`\n✅  {green Successfully removed \`@prisma-multi-tenant-v3/client\` from your app. Bye! 👋}\n`
    )
  }
}

export default new Eject()
