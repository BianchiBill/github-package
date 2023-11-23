export interface ISendToBucketReturn {
  $metadata: {
    httpStatusCode?: number;
    requestId?: string;
    extendedRequestId?: string;
    cfId?: string;
    attempts?: number;
    totalRetryDelay?: number;
  };
  Key: string;
  Location: string;
}
export interface ISendStreamReturn {
  $metadata: {
    httpStatusCode?: number;
    requestId?: string;
    extendedRequestId?: string;
    cfId?: string;
    attempts?: number;
    totalRetryDelay?: number;
  };
}

export interface ISendToBucketParams {
  bucket: string;
  folder: string;
  filename: string;
  contentType: string;
  file: Blob;
}

export interface IGetFromBucketParams {
  bucket: string;
  key: string;
}

export interface IDeleteFromBucketParams {
  bucket: string;
  key: string;
}
export interface IDeleteFromBucketReturn {
  DeleteMarker?: boolean;
  VersionId?: string;
  RequestCharged?: string;
}

export interface IGetObjectTaggingParams {
  bucket: string;
  key: string;
}

export interface ISignedUrlParams {
  bucket: string;
  key: string;
  filename: string;
}

export interface IListObjectsParams {
  bucket: string;
  prefix: string;
  continuationToken: string;
}

export interface IListObjectsReturn {
  Contents?: any[];
  CommonPrefixes?: any[];
  KeyCount?: number;
}


export interface ITagObjectParams {
  bucket: string;
  value: string;
  key: string;
  tags: Array<{
    key: string,
    value: string
  }>;
}

export interface ITagSetParams {
  TagSet: Array<{
    Key: string;
    Value: string;
  }>
}

export interface ITagSetReturn {
  TagSet?: {
    Key: string | undefined;
    Value: string | undefined;
  }[];
}

export interface IS3ServiceConfig {
  endpointUrl?: string;
}
