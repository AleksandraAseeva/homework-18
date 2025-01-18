import { useSelector } from "react-redux";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { beanSelector } from "../../Redux/bean/beanSelector";

export const ApiDocumentation = () => {
  const { isLoading, isError } = useSelector(beanSelector);

  return (
    <>
      {isLoading && <Loader />}
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20rem', color: 'red', fontSize: '2rem'}}>
            <a href="https://jelly-belly-wiki.netlify.app/api">Прочитать документацию</a>
        </div>
      {isError && <Error />}
    </>
  );
};