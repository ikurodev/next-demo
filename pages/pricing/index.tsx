import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <>
      <h1 className={'title'}>
          Welcome to <Link href="/">Pricing</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing.js</code>
      </p>
    </>
  )
}

Pricing.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {/* <DarkLayout> */}
        {page}
      {/* </DarkLayout> */}
    </MainLayout>
  )
}