// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Offset, type OffsetParams, PagePromise } from '../core/pagination';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Upload a file for processing with AI. The file will be analyzed and made
   * searchable using natural language queries.
   */
  fileCreate(body: FileFileCreateParams, options?: RequestOptions): APIPromise<FileFileCreateResponse> {
    return this._client.post('/files/', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Search for content within a processed file using natural language queries.
   * Returns relevant passages and their context.
   */
  fileSearch(
    fileID: string,
    query: FileFileSearchParams,
    options?: RequestOptions,
  ): APIPromise<FileFileSearchResponse> {
    return this._client.get(path`/files/${fileID}/search`, { query, ...options });
  }

  /**
   * Retrieve a list of files. Can be filtered by status and sorted by upload time.
   */
  fileslist(
    query: FileFileslistParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FileFileslistResponsesOffset, FileFileslistResponse> {
    return this._client.getAPIList('/files/', Offset<FileFileslistResponse>, { query, ...options });
  }
}

export type FileFileslistResponsesOffset = Offset<FileFileslistResponse>;

export interface FileFileCreateResponse {
  /**
   * Unique identifier for the file
   */
  file_id?: string;

  /**
   * Current processing status
   */
  status?: 'pending' | 'processing';

  /**
   * Time the file was uploaded
   */
  upload_time?: string;
}

export interface FileFileSearchResponse {
  /**
   * Unique identifier of the searched file
   */
  file_id?: string;

  /**
   * File metadata (only included if requested)
   */
  metadata?: FileFileSearchResponse.Metadata;

  /**
   * The search query used
   */
  query?: string;

  results?: Array<FileFileSearchResponse.Result>;

  /**
   * Total number of results found
   */
  total_results?: number;
}

export namespace FileFileSearchResponse {
  /**
   * File metadata (only included if requested)
   */
  export interface Metadata {
    /**
     * User-provided description of the file
     */
    description?: string;

    /**
     * Unique identifier for the file
     */
    file_id?: string;

    /**
     * MIME type of the file
     */
    file_type?: string;

    /**
     * Original name of the file
     */
    filename?: string;

    /**
     * Number of pages (for documents)
     */
    page_count?: number;

    processing_options?: Metadata.ProcessingOptions;

    /**
     * Time the file was uploaded
     */
    upload_time?: string;

    /**
     * Approximate word count
     */
    word_count?: number;
  }

  export namespace Metadata {
    export interface ProcessingOptions {
      /**
       * Language used for processing
       */
      language?: string;

      /**
       * Whether OCR was used
       */
      ocr?: boolean;
    }
  }

  export interface Result {
    /**
     * Additional context information (document-type specific)
     */
    additional_context?: unknown;

    /**
     * Character ranges to highlight within the passage
     */
    highlight_ranges?: Array<Result.HighlightRange>;

    /**
     * Page number where the match was found (if applicable)
     */
    page_number?: number;

    /**
     * Text passage containing the match with surrounding context
     */
    passage?: string;

    /**
     * Relevance score of the result (0-1)
     */
    relevance_score?: number;
  }

  export namespace Result {
    export interface HighlightRange {
      /**
       * End index of highlight in passage
       */
      end?: number;

      /**
       * Start index of highlight in passage
       */
      start?: number;
    }
  }
}

export interface FileFileslistResponse {
  /**
   * Time processing was completed (if applicable)
   */
  completion_time?: string;

  /**
   * Error message (if status is 'failed')
   */
  error?: string;

  /**
   * Unique identifier for the file
   */
  file_id?: string;

  /**
   * Size of the file in bytes
   */
  file_size?: number;

  /**
   * Original name of the file
   */
  filename?: string;

  /**
   * Current processing status
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed';

  /**
   * Time the file was uploaded
   */
  upload_time?: string;
}

export interface FileFileCreateParams {
  /**
   * The file to upload
   */
  file: Uploadable;

  /**
   * Optional description of the file
   */
  description?: string;

  processing_options?: FileFileCreateParams.ProcessingOptions;
}

export namespace FileFileCreateParams {
  export interface ProcessingOptions {
    /**
     * Preferred language for processing
     */
    language?: string;

    /**
     * Enable OCR for image-based documents
     */
    ocr?: boolean;
  }
}

export interface FileFileSearchParams {
  /**
   * Natural language search query
   */
  query: string;

  /**
   * Number of characters to include before and after the match
   */
  context_size?: number;

  /**
   * Whether to include file metadata in response
   */
  include_metadata?: boolean;

  /**
   * Maximum number of results to return
   */
  max_results?: number;
}

export interface FileFileslistParams extends OffsetParams {
  /**
   * Field to sort by
   */
  sort_by?: 'upload_time' | 'status';

  /**
   * Sort order
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Filter by processing status
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed';
}

export declare namespace Files {
  export {
    type FileFileCreateResponse as FileFileCreateResponse,
    type FileFileSearchResponse as FileFileSearchResponse,
    type FileFileslistResponse as FileFileslistResponse,
    type FileFileslistResponsesOffset as FileFileslistResponsesOffset,
    type FileFileCreateParams as FileFileCreateParams,
    type FileFileSearchParams as FileFileSearchParams,
    type FileFileslistParams as FileFileslistParams,
  };
}
