// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AcmeAISDK, { toFile } from 'acme-ai-sdk';

const client = new AcmeAISDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // skipped: tests are disabled for the time being
  test.skip('fileCreate: only required params', async () => {
    const responsePromise = client.files.fileCreate({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('fileCreate: required and optional params', async () => {
    const response = await client.files.fileCreate({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      description: 'description',
      processing_options: { language: 'language', ocr: true },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('fileSearch: only required params', async () => {
    const responsePromise = client.files.fileSearch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      query: 'query',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('fileSearch: required and optional params', async () => {
    const response = await client.files.fileSearch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      query: 'query',
      context_size: 0,
      include_metadata: true,
      max_results: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('fileslist', async () => {
    const responsePromise = client.files.fileslist();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('fileslist: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.fileslist(
        { limit: 1, offset: 0, sort_by: 'upload_time', sort_order: 'asc', status: 'pending' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AcmeAISDK.NotFoundError);
  });
});
