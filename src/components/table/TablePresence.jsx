export default function TablePresence() {
  return (
    <div className="overflow-auto border border-gray-300 lg:overflow-hidden lg:rounded-md">
      <table className="w-full border-collapse">
        <thead className="bg-primary-purple text-center font-intro text-white">
          <tr className="border-b border-gray-300">
            <th className="px-4 py-3">Tanggal</th>
            <th className="px-4 py-3">Hari</th>
            <th className="px-4 py-3">Masuk</th>
            <th className="px-4 py-3">Pulang</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          <tr className="border-b border-gray-300">
            <td className="px-4 py-3">1 Maret 2023</td>
            <td className="px-4 py-3">Senin</td>
            <td className="px-4 py-3">07:30</td>
            <td className="px-4 py-3">16:00</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-3">2 Maret 2023</td>
            <td className="px-4 py-3">Selasa</td>
            <td className="px-4 py-3">07:30</td>
            <td className="px-4 py-3">16:00</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-3">3 Maret 2023</td>
            <td className="px-4 py-3">Rabu</td>
            <td className="px-4 py-3">07:30</td>
            <td className="px-4 py-3">16:00</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-3">4 Maret 2023</td>
            <td className="px-4 py-3">Kamis</td>
            <td className="px-4 py-3">07:30</td>
            <td className="px-4 py-3">16:00</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-3">5 Maret 2023</td>
            <td className="px-4 py-3">Jumat</td>
            <td className="px-4 py-3">07:30</td>
            <td className="px-4 py-3">16:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
