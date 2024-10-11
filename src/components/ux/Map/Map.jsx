import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
} from 'ymap3-components';
import { LOCATION } from '../../../helper/location';

const Map = (props) => {
  const apiKey = import.meta.env.VITE_API_KEY_MAPS || null;

  if (!apiKey) return <div>MAPS NOT FOUND</div>;

  const { location = LOCATION } = props;

  return (
    <YMapComponentsProvider {...{ apiKey }}>
      <YMap {...{ location }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapDefaultMarker {...{ coordinates: location.center }} />
      </YMap>
    </YMapComponentsProvider>
  );
};

export default Map;
