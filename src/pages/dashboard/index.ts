import { lazy } from "react";

export const Welcome = lazy(
    () => import('./welcome')
);

export const Details = lazy(
    () => import('./details')
);

