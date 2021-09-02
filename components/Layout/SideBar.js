import AgendaCard from "@components/UI/AgendaCard";
import PengumumanSidebar from "@components/UI/PengumumanSidebar";

export default function SideBar() {
  return (
    <div className="px-2">
      <div>
        <h2 className=" capitalize text-2xl pt-4 font-semibold text-gray-600 mb-2">
          Pengumuman
        </h2>
        <div className="flex flex-col">
          <PengumumanSidebar
            pengumuman="Jadwal Kenaikan Pangkat di Undur Menjadi 25 September 2021
                Bertempat di SMA 1 Sultan Agung"
            tanggal=" 25 Agustus 2021"
          />
          <PengumumanSidebar
            pengumuman="Lowongan Guru PAI SD Islam Sultan Agung 2"
            tanggal=" 25 Agustus 2021"
          />
          <PengumumanSidebar
            pengumuman="Jadwal Kenaikan Pangkat di Undur Menjadi 25 September 2021
                Bertempat di SMA 1 Sultan Agung"
            tanggal=" 25 Agustus 2021"
          />
        </div>
      </div>
      <div>
        <h2 className=" capitalize text-2xl py-4 font-semibold text-gray-600 my-2">
          Agenda Mendatang
        </h2>
        <AgendaCard
          title="Workshop dan Parenting Siswa Baru 2021"
          tempat="Aula SMA Sultan Agung 1"
          tanggal="20"
          bulan="Feb"
          waktu="08.00 - 20.00 Wib"
        />
        <AgendaCard
          title="Refresh Budaya Sekolah Islam"
          tempat="Graha Wiyata Patemon"
          tanggal="31"
          bulan="Agu"
          waktu="08.00 - 20.00 Wib"
        />
        <AgendaCard
          title="Monitoring Bidang Keuangan"
          tempat="SMP Islam Sultan Agung 1"
          tanggal="23"
          bulan="Mar"
          waktu="08.00 - 20.00 Wib"
        />
      </div>
    </div>
  );
}
