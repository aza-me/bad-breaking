import { EpisodeModel } from 'app/models/episodes';
import { AxiosPromise } from 'axios';

export interface GetAllEpisodes {
  (data?: { limit?: number }): AxiosPromise<EpisodeModel[]>;
}
