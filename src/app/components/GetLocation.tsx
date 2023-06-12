import { useRouter } from "next/navigation";
import { BiLocationPlus } from "react-icons/bi";

const FindHospitalsNearMe = ({
  onCityFetched,
}: {
  onCityFetched: (city: string) => void;
}) => {
  const router = useRouter();
  const handleFindHospitalsNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          const city = data.locality;
          onCityFetched(city);
          router.push(`/hospitals?city=${city}`);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <button className="btn mt-2" onClick={handleFindHospitalsNearMe}>
      Nearby Hospitals <BiLocationPlus className="ml-2 w-6 h-6" />
    </button>
  );
};

export default FindHospitalsNearMe;
