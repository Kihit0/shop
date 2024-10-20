import styles from './style.module.scss';
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  YMapDefaultSchemeLayer,
} from 'ymap3-components';
import { LOCATION } from '../../../helper/location';

// TODO Feature: style marker custom!
// TODO Feature: click marker and about shop info

const Map = (props) => {
  const apiKey = import.meta.env.VITE_API_KEY_MAPS || 'f7183325-e629-48fe-afe6-6db0513e86cf';

  if (!apiKey) return <div>MAPS NOT FOUND</div>;

  const { location = LOCATION } = props;

  return (
    <YMapComponentsProvider {...{ apiKey }}>
      <YMap {...{ location }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapMarker {...{ coordinates: location.center }}>
          <div {...{ className: styles.marker }}>
            <span></span>
          </div>
        </YMapMarker>
      </YMap>
    </YMapComponentsProvider>
  );
};

export default Map;
