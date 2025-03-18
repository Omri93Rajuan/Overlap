/* eslint-disable max-classes-per-file */
export class SystemsError extends Error {
    constructor(
        public code: number,
        message: string,
    ) {
        super(message);
    }
}

export class DocumentNotFoundError extends SystemsError {
    constructor(id: string) {
        super(404, `No feature found with id ${id}`);
    }
}
