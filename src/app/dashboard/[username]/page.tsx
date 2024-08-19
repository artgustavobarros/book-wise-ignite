import { Sidebar } from '@/components/sidebar/siderbar'
import { ExplorerPage } from '@/components/dashboard/explorer-page'
import * as Tabs from '@radix-ui/react-tabs'
import { StartPage } from '@/components/dashboard/start-page'
import { Providers } from '@/components/provider'

export default async function Dashboard() {
  return (
    <Providers>
      <Tabs.Root defaultValue="Início">
        <section className="grid grid-cols-[232px_996px] gap-24">
          <div>
            <Tabs.List>
              <Sidebar />
            </Tabs.List>
          </div>
          <div>
            <Tabs.Content value="Início">
              <StartPage />
            </Tabs.Content>
            <Tabs.Content value="Explorar">
              <ExplorerPage />
            </Tabs.Content>
          </div>
        </section>
      </Tabs.Root>
    </Providers>
  )
}
