import { useRouter } from "next/navigation";

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
    <button onClick={handleFindHospitalsNearMe}>Find Hospitals Near Me</button>
  );
};

export default FindHospitalsNearMe;
