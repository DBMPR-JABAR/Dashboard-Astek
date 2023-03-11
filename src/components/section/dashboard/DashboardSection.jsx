import Image from 'next/image'
import homeFillGraySvg from '../../../assets/icon/home_fill_gray.svg'
import TablePresence from '../../table/TablePresence'

export default function DashboardSection({ marginLeft }) {
  console.log(marginLeft)

  return (
    <main style={{ marginLeft: marginLeft }}>
      <section className="mt-6 lg:mt-0">
        <div className="mx-5 md:mx-10">
          <Image src={homeFillGraySvg} alt="Icon Home" className="w-4" />
          <span className="mt-6 block font-intro text-2xl font-bold">
            Dashboard
          </span>
        </div>
      </section>
      <section className="mt-6">
        <div className="mx-5 md:mx-10">
          <div className="overflow-auto rounded-md bg-white p-4">
            <TablePresence />
          </div>
        </div>
      </section>
    </main>
  )
}
