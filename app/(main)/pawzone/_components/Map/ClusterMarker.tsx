import { useLocationStore } from '@/hooks/stores/useLocationStore';
import { OverlayView } from '@react-google-maps/api';
import Supercluster, { PointFeature } from 'supercluster';
import { shallow } from 'zustand/shallow';

export type Properties = {
  cluster: boolean;
  placeId: number;
  placeName: string;
  placeRating: number | null;
};

export type PointFeatureArray = PointFeature<Properties>[];

interface Props {
  position: { lat: number; lng: number };
  pointCount: number;
  clusterId?: number;
  points: PointFeatureArray;
  supercluster?: Supercluster<Properties, Supercluster.AnyProps>;
}

export default function ClusterMarker({
  position,
  pointCount,
  clusterId,
  points,
  supercluster,
}: Props) {
  const { mapRef } = useLocationStore(
    (state) => ({ mapRef: state.mapRef }),
    shallow,
  );
  if (!clusterId || !supercluster) return null;
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(width: number, height: number) => ({
        x: -(width / 2),
        y: -(height / 2),
      })}
    >
      <button
        type="button"
        className="bg-primary-200 rounded-full p-2 flex justify-center items-center z-[999] hover:z-[1000]"
        style={{
          width: `${40 + (pointCount / points.length) * 20}px`,
          height: `${40 + (pointCount / points.length) * 20}px`,
        }}
        onClick={(e) => {
          e.stopPropagation();
          const expansionZoom = Math.min(
            supercluster.getClusterExpansionZoom(clusterId),
            20,
          );
          mapRef.current?.setZoom(expansionZoom);
          mapRef.current?.panTo({
            lat: position.lat,
            lng: position.lng,
          });
        }}
      >
        <span className="caption1 text-white">{pointCount}</span>
      </button>
    </OverlayView>
  );
}
