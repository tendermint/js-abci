import * as $protobuf from "protobufjs";
/** Namespace tendermint. */
export namespace tendermint {

    /** Namespace abci. */
    namespace abci {

        /** Properties of a Request. */
        interface IRequest {

            /** Request echo */
            echo?: (tendermint.abci.IRequestEcho|null);

            /** Request flush */
            flush?: (tendermint.abci.IRequestFlush|null);

            /** Request info */
            info?: (tendermint.abci.IRequestInfo|null);

            /** Request setOption */
            setOption?: (tendermint.abci.IRequestSetOption|null);

            /** Request initChain */
            initChain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query */
            query?: (tendermint.abci.IRequestQuery|null);

            /** Request beginBlock */
            beginBlock?: (tendermint.abci.IRequestBeginBlock|null);

            /** Request checkTx */
            checkTx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request deliverTx */
            deliverTx?: (tendermint.abci.IRequestDeliverTx|null);

            /** Request endBlock */
            endBlock?: (tendermint.abci.IRequestEndBlock|null);

            /** Request commit */
            commit?: (tendermint.abci.IRequestCommit|null);

            /** Request listSnapshots */
            listSnapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offerSnapshot */
            offerSnapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request loadSnapshotChunk */
            loadSnapshotChunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request applySnapshotChunk */
            applySnapshotChunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequest);

            /** Request echo. */
            public echo?: (tendermint.abci.IRequestEcho|null);

            /** Request flush. */
            public flush?: (tendermint.abci.IRequestFlush|null);

            /** Request info. */
            public info?: (tendermint.abci.IRequestInfo|null);

            /** Request setOption. */
            public setOption?: (tendermint.abci.IRequestSetOption|null);

            /** Request initChain. */
            public initChain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query. */
            public query?: (tendermint.abci.IRequestQuery|null);

            /** Request beginBlock. */
            public beginBlock?: (tendermint.abci.IRequestBeginBlock|null);

            /** Request checkTx. */
            public checkTx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request deliverTx. */
            public deliverTx?: (tendermint.abci.IRequestDeliverTx|null);

            /** Request endBlock. */
            public endBlock?: (tendermint.abci.IRequestEndBlock|null);

            /** Request commit. */
            public commit?: (tendermint.abci.IRequestCommit|null);

            /** Request listSnapshots. */
            public listSnapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offerSnapshot. */
            public offerSnapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request loadSnapshotChunk. */
            public loadSnapshotChunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request applySnapshotChunk. */
            public applySnapshotChunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);

            /** Request value. */
            public value?: ("echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk");

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: tendermint.abci.IRequest): tendermint.abci.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestEcho. */
        interface IRequestEcho {

            /** RequestEcho message */
            message?: (string|null);
        }

        /** Represents a RequestEcho. */
        class RequestEcho implements IRequestEcho {

            /**
             * Constructs a new RequestEcho.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestEcho);

            /** RequestEcho message. */
            public message: string;

            /**
             * Creates a new RequestEcho instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestEcho instance
             */
            public static create(properties?: tendermint.abci.IRequestEcho): tendermint.abci.RequestEcho;

            /**
             * Encodes the specified RequestEcho message. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @param message RequestEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestEcho message, length delimited. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @param message RequestEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestEcho message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestEcho;

            /**
             * Decodes a RequestEcho message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestEcho;

            /**
             * Verifies a RequestEcho message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestEcho message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestEcho
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestEcho;

            /**
             * Creates a plain object from a RequestEcho message. Also converts values to other types if specified.
             * @param message RequestEcho
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestEcho to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestFlush. */
        interface IRequestFlush {
        }

        /** Represents a RequestFlush. */
        class RequestFlush implements IRequestFlush {

            /**
             * Constructs a new RequestFlush.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestFlush);

            /**
             * Creates a new RequestFlush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestFlush instance
             */
            public static create(properties?: tendermint.abci.IRequestFlush): tendermint.abci.RequestFlush;

            /**
             * Encodes the specified RequestFlush message. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @param message RequestFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestFlush message, length delimited. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @param message RequestFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestFlush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestFlush;

            /**
             * Decodes a RequestFlush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestFlush;

            /**
             * Verifies a RequestFlush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestFlush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestFlush
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestFlush;

            /**
             * Creates a plain object from a RequestFlush message. Also converts values to other types if specified.
             * @param message RequestFlush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestFlush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestInfo. */
        interface IRequestInfo {

            /** RequestInfo version */
            version?: (string|null);

            /** RequestInfo blockVersion */
            blockVersion?: (number|Long|null);

            /** RequestInfo p2pVersion */
            p2pVersion?: (number|Long|null);
        }

        /** Represents a RequestInfo. */
        class RequestInfo implements IRequestInfo {

            /**
             * Constructs a new RequestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestInfo);

            /** RequestInfo version. */
            public version: string;

            /** RequestInfo blockVersion. */
            public blockVersion: (number|Long);

            /** RequestInfo p2pVersion. */
            public p2pVersion: (number|Long);

            /**
             * Creates a new RequestInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestInfo instance
             */
            public static create(properties?: tendermint.abci.IRequestInfo): tendermint.abci.RequestInfo;

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestInfo;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestInfo;

            /**
             * Verifies a RequestInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestInfo;

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @param message RequestInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestSetOption. */
        interface IRequestSetOption {

            /** RequestSetOption key */
            key?: (string|null);

            /** RequestSetOption value */
            value?: (string|null);
        }

        /** Represents a RequestSetOption. */
        class RequestSetOption implements IRequestSetOption {

            /**
             * Constructs a new RequestSetOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestSetOption);

            /** RequestSetOption key. */
            public key: string;

            /** RequestSetOption value. */
            public value: string;

            /**
             * Creates a new RequestSetOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestSetOption instance
             */
            public static create(properties?: tendermint.abci.IRequestSetOption): tendermint.abci.RequestSetOption;

            /**
             * Encodes the specified RequestSetOption message. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @param message RequestSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestSetOption message, length delimited. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @param message RequestSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestSetOption;

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestSetOption;

            /**
             * Verifies a RequestSetOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestSetOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestSetOption
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestSetOption;

            /**
             * Creates a plain object from a RequestSetOption message. Also converts values to other types if specified.
             * @param message RequestSetOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestSetOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestInitChain. */
        interface IRequestInitChain {

            /** RequestInitChain time */
            time?: (google.protobuf.ITimestamp|null);

            /** RequestInitChain chainId */
            chainId?: (string|null);

            /** RequestInitChain consensusParams */
            consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** RequestInitChain validators */
            validators?: (tendermint.abci.IValidatorUpdate[]|null);

            /** RequestInitChain appStateBytes */
            appStateBytes?: (Uint8Array|null);

            /** RequestInitChain initialHeight */
            initialHeight?: (number|Long|null);
        }

        /** Represents a RequestInitChain. */
        class RequestInitChain implements IRequestInitChain {

            /**
             * Constructs a new RequestInitChain.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestInitChain);

            /** RequestInitChain time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** RequestInitChain chainId. */
            public chainId: string;

            /** RequestInitChain consensusParams. */
            public consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** RequestInitChain validators. */
            public validators: tendermint.abci.IValidatorUpdate[];

            /** RequestInitChain appStateBytes. */
            public appStateBytes: Uint8Array;

            /** RequestInitChain initialHeight. */
            public initialHeight: (number|Long);

            /**
             * Creates a new RequestInitChain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestInitChain instance
             */
            public static create(properties?: tendermint.abci.IRequestInitChain): tendermint.abci.RequestInitChain;

            /**
             * Encodes the specified RequestInitChain message. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @param message RequestInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInitChain message, length delimited. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @param message RequestInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestInitChain;

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestInitChain;

            /**
             * Verifies a RequestInitChain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInitChain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInitChain
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestInitChain;

            /**
             * Creates a plain object from a RequestInitChain message. Also converts values to other types if specified.
             * @param message RequestInitChain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInitChain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestQuery. */
        interface IRequestQuery {

            /** RequestQuery data */
            data?: (Uint8Array|null);

            /** RequestQuery path */
            path?: (string|null);

            /** RequestQuery height */
            height?: (number|Long|null);

            /** RequestQuery prove */
            prove?: (boolean|null);
        }

        /** Represents a RequestQuery. */
        class RequestQuery implements IRequestQuery {

            /**
             * Constructs a new RequestQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestQuery);

            /** RequestQuery data. */
            public data: Uint8Array;

            /** RequestQuery path. */
            public path: string;

            /** RequestQuery height. */
            public height: (number|Long);

            /** RequestQuery prove. */
            public prove: boolean;

            /**
             * Creates a new RequestQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestQuery instance
             */
            public static create(properties?: tendermint.abci.IRequestQuery): tendermint.abci.RequestQuery;

            /**
             * Encodes the specified RequestQuery message. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @param message RequestQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestQuery message, length delimited. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @param message RequestQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestQuery;

            /**
             * Decodes a RequestQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestQuery;

            /**
             * Verifies a RequestQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestQuery
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestQuery;

            /**
             * Creates a plain object from a RequestQuery message. Also converts values to other types if specified.
             * @param message RequestQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestBeginBlock. */
        interface IRequestBeginBlock {

            /** RequestBeginBlock hash */
            hash?: (Uint8Array|null);

            /** RequestBeginBlock header */
            header?: (tendermint.types.IHeader|null);

            /** RequestBeginBlock lastCommitInfo */
            lastCommitInfo?: (tendermint.abci.ILastCommitInfo|null);

            /** RequestBeginBlock byzantineValidators */
            byzantineValidators?: (tendermint.abci.IEvidence[]|null);
        }

        /** Represents a RequestBeginBlock. */
        class RequestBeginBlock implements IRequestBeginBlock {

            /**
             * Constructs a new RequestBeginBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestBeginBlock);

            /** RequestBeginBlock hash. */
            public hash: Uint8Array;

            /** RequestBeginBlock header. */
            public header?: (tendermint.types.IHeader|null);

            /** RequestBeginBlock lastCommitInfo. */
            public lastCommitInfo?: (tendermint.abci.ILastCommitInfo|null);

            /** RequestBeginBlock byzantineValidators. */
            public byzantineValidators: tendermint.abci.IEvidence[];

            /**
             * Creates a new RequestBeginBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestBeginBlock instance
             */
            public static create(properties?: tendermint.abci.IRequestBeginBlock): tendermint.abci.RequestBeginBlock;

            /**
             * Encodes the specified RequestBeginBlock message. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @param message RequestBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @param message RequestBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestBeginBlock;

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestBeginBlock;

            /**
             * Verifies a RequestBeginBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestBeginBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestBeginBlock;

            /**
             * Creates a plain object from a RequestBeginBlock message. Also converts values to other types if specified.
             * @param message RequestBeginBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestBeginBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** CheckTxType enum. */
        enum CheckTxType {
            NEW = 0,
            RECHECK = 1
        }

        /** Properties of a RequestCheckTx. */
        interface IRequestCheckTx {

            /** RequestCheckTx tx */
            tx?: (Uint8Array|null);

            /** RequestCheckTx type */
            type?: (tendermint.abci.CheckTxType|null);
        }

        /** Represents a RequestCheckTx. */
        class RequestCheckTx implements IRequestCheckTx {

            /**
             * Constructs a new RequestCheckTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestCheckTx);

            /** RequestCheckTx tx. */
            public tx: Uint8Array;

            /** RequestCheckTx type. */
            public type: tendermint.abci.CheckTxType;

            /**
             * Creates a new RequestCheckTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestCheckTx instance
             */
            public static create(properties?: tendermint.abci.IRequestCheckTx): tendermint.abci.RequestCheckTx;

            /**
             * Encodes the specified RequestCheckTx message. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @param message RequestCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @param message RequestCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestCheckTx;

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestCheckTx;

            /**
             * Verifies a RequestCheckTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestCheckTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestCheckTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestCheckTx;

            /**
             * Creates a plain object from a RequestCheckTx message. Also converts values to other types if specified.
             * @param message RequestCheckTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestCheckTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestDeliverTx. */
        interface IRequestDeliverTx {

            /** RequestDeliverTx tx */
            tx?: (Uint8Array|null);
        }

        /** Represents a RequestDeliverTx. */
        class RequestDeliverTx implements IRequestDeliverTx {

            /**
             * Constructs a new RequestDeliverTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestDeliverTx);

            /** RequestDeliverTx tx. */
            public tx: Uint8Array;

            /**
             * Creates a new RequestDeliverTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestDeliverTx instance
             */
            public static create(properties?: tendermint.abci.IRequestDeliverTx): tendermint.abci.RequestDeliverTx;

            /**
             * Encodes the specified RequestDeliverTx message. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @param message RequestDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @param message RequestDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestDeliverTx;

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestDeliverTx;

            /**
             * Verifies a RequestDeliverTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestDeliverTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestDeliverTx;

            /**
             * Creates a plain object from a RequestDeliverTx message. Also converts values to other types if specified.
             * @param message RequestDeliverTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestDeliverTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestEndBlock. */
        interface IRequestEndBlock {

            /** RequestEndBlock height */
            height?: (number|Long|null);
        }

        /** Represents a RequestEndBlock. */
        class RequestEndBlock implements IRequestEndBlock {

            /**
             * Constructs a new RequestEndBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestEndBlock);

            /** RequestEndBlock height. */
            public height: (number|Long);

            /**
             * Creates a new RequestEndBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestEndBlock instance
             */
            public static create(properties?: tendermint.abci.IRequestEndBlock): tendermint.abci.RequestEndBlock;

            /**
             * Encodes the specified RequestEndBlock message. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @param message RequestEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @param message RequestEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestEndBlock;

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestEndBlock;

            /**
             * Verifies a RequestEndBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestEndBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestEndBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestEndBlock;

            /**
             * Creates a plain object from a RequestEndBlock message. Also converts values to other types if specified.
             * @param message RequestEndBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestEndBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestCommit. */
        interface IRequestCommit {
        }

        /** Represents a RequestCommit. */
        class RequestCommit implements IRequestCommit {

            /**
             * Constructs a new RequestCommit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestCommit);

            /**
             * Creates a new RequestCommit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestCommit instance
             */
            public static create(properties?: tendermint.abci.IRequestCommit): tendermint.abci.RequestCommit;

            /**
             * Encodes the specified RequestCommit message. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @param message RequestCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestCommit message, length delimited. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @param message RequestCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestCommit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestCommit;

            /**
             * Decodes a RequestCommit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestCommit;

            /**
             * Verifies a RequestCommit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestCommit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestCommit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestCommit;

            /**
             * Creates a plain object from a RequestCommit message. Also converts values to other types if specified.
             * @param message RequestCommit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestCommit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestListSnapshots. */
        interface IRequestListSnapshots {
        }

        /** Represents a RequestListSnapshots. */
        class RequestListSnapshots implements IRequestListSnapshots {

            /**
             * Constructs a new RequestListSnapshots.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestListSnapshots);

            /**
             * Creates a new RequestListSnapshots instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestListSnapshots instance
             */
            public static create(properties?: tendermint.abci.IRequestListSnapshots): tendermint.abci.RequestListSnapshots;

            /**
             * Encodes the specified RequestListSnapshots message. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @param message RequestListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @param message RequestListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestListSnapshots;

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestListSnapshots;

            /**
             * Verifies a RequestListSnapshots message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestListSnapshots
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestListSnapshots;

            /**
             * Creates a plain object from a RequestListSnapshots message. Also converts values to other types if specified.
             * @param message RequestListSnapshots
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestListSnapshots, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestListSnapshots to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestOfferSnapshot. */
        interface IRequestOfferSnapshot {

            /** RequestOfferSnapshot snapshot */
            snapshot?: (tendermint.abci.ISnapshot|null);

            /** RequestOfferSnapshot appHash */
            appHash?: (Uint8Array|null);
        }

        /** Represents a RequestOfferSnapshot. */
        class RequestOfferSnapshot implements IRequestOfferSnapshot {

            /**
             * Constructs a new RequestOfferSnapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestOfferSnapshot);

            /** RequestOfferSnapshot snapshot. */
            public snapshot?: (tendermint.abci.ISnapshot|null);

            /** RequestOfferSnapshot appHash. */
            public appHash: Uint8Array;

            /**
             * Creates a new RequestOfferSnapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestOfferSnapshot instance
             */
            public static create(properties?: tendermint.abci.IRequestOfferSnapshot): tendermint.abci.RequestOfferSnapshot;

            /**
             * Encodes the specified RequestOfferSnapshot message. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @param message RequestOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @param message RequestOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestOfferSnapshot;

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestOfferSnapshot;

            /**
             * Verifies a RequestOfferSnapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestOfferSnapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestOfferSnapshot;

            /**
             * Creates a plain object from a RequestOfferSnapshot message. Also converts values to other types if specified.
             * @param message RequestOfferSnapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestOfferSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestOfferSnapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestLoadSnapshotChunk. */
        interface IRequestLoadSnapshotChunk {

            /** RequestLoadSnapshotChunk height */
            height?: (number|Long|null);

            /** RequestLoadSnapshotChunk format */
            format?: (number|null);

            /** RequestLoadSnapshotChunk chunk */
            chunk?: (number|null);
        }

        /** Represents a RequestLoadSnapshotChunk. */
        class RequestLoadSnapshotChunk implements IRequestLoadSnapshotChunk {

            /**
             * Constructs a new RequestLoadSnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestLoadSnapshotChunk);

            /** RequestLoadSnapshotChunk height. */
            public height: (number|Long);

            /** RequestLoadSnapshotChunk format. */
            public format: number;

            /** RequestLoadSnapshotChunk chunk. */
            public chunk: number;

            /**
             * Creates a new RequestLoadSnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestLoadSnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IRequestLoadSnapshotChunk): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Encodes the specified RequestLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @param message RequestLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @param message RequestLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Verifies a RequestLoadSnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestLoadSnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Creates a plain object from a RequestLoadSnapshotChunk message. Also converts values to other types if specified.
             * @param message RequestLoadSnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestLoadSnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestLoadSnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestApplySnapshotChunk. */
        interface IRequestApplySnapshotChunk {

            /** RequestApplySnapshotChunk index */
            index?: (number|null);

            /** RequestApplySnapshotChunk chunk */
            chunk?: (Uint8Array|null);

            /** RequestApplySnapshotChunk sender */
            sender?: (string|null);
        }

        /** Represents a RequestApplySnapshotChunk. */
        class RequestApplySnapshotChunk implements IRequestApplySnapshotChunk {

            /**
             * Constructs a new RequestApplySnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestApplySnapshotChunk);

            /** RequestApplySnapshotChunk index. */
            public index: number;

            /** RequestApplySnapshotChunk chunk. */
            public chunk: Uint8Array;

            /** RequestApplySnapshotChunk sender. */
            public sender: string;

            /**
             * Creates a new RequestApplySnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestApplySnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IRequestApplySnapshotChunk): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Encodes the specified RequestApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @param message RequestApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @param message RequestApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Verifies a RequestApplySnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestApplySnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Creates a plain object from a RequestApplySnapshotChunk message. Also converts values to other types if specified.
             * @param message RequestApplySnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestApplySnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestApplySnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response exception */
            exception?: (tendermint.abci.IResponseException|null);

            /** Response echo */
            echo?: (tendermint.abci.IResponseEcho|null);

            /** Response flush */
            flush?: (tendermint.abci.IResponseFlush|null);

            /** Response info */
            info?: (tendermint.abci.IResponseInfo|null);

            /** Response setOption */
            setOption?: (tendermint.abci.IResponseSetOption|null);

            /** Response initChain */
            initChain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query */
            query?: (tendermint.abci.IResponseQuery|null);

            /** Response beginBlock */
            beginBlock?: (tendermint.abci.IResponseBeginBlock|null);

            /** Response checkTx */
            checkTx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response deliverTx */
            deliverTx?: (tendermint.abci.IResponseDeliverTx|null);

            /** Response endBlock */
            endBlock?: (tendermint.abci.IResponseEndBlock|null);

            /** Response commit */
            commit?: (tendermint.abci.IResponseCommit|null);

            /** Response listSnapshots */
            listSnapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offerSnapshot */
            offerSnapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response loadSnapshotChunk */
            loadSnapshotChunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response applySnapshotChunk */
            applySnapshotChunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponse);

            /** Response exception. */
            public exception?: (tendermint.abci.IResponseException|null);

            /** Response echo. */
            public echo?: (tendermint.abci.IResponseEcho|null);

            /** Response flush. */
            public flush?: (tendermint.abci.IResponseFlush|null);

            /** Response info. */
            public info?: (tendermint.abci.IResponseInfo|null);

            /** Response setOption. */
            public setOption?: (tendermint.abci.IResponseSetOption|null);

            /** Response initChain. */
            public initChain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query. */
            public query?: (tendermint.abci.IResponseQuery|null);

            /** Response beginBlock. */
            public beginBlock?: (tendermint.abci.IResponseBeginBlock|null);

            /** Response checkTx. */
            public checkTx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response deliverTx. */
            public deliverTx?: (tendermint.abci.IResponseDeliverTx|null);

            /** Response endBlock. */
            public endBlock?: (tendermint.abci.IResponseEndBlock|null);

            /** Response commit. */
            public commit?: (tendermint.abci.IResponseCommit|null);

            /** Response listSnapshots. */
            public listSnapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offerSnapshot. */
            public offerSnapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response loadSnapshotChunk. */
            public loadSnapshotChunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response applySnapshotChunk. */
            public applySnapshotChunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);

            /** Response value. */
            public value?: ("exception"|"echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk");

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: tendermint.abci.IResponse): tendermint.abci.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Response;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseException. */
        interface IResponseException {

            /** ResponseException error */
            error?: (string|null);
        }

        /** Represents a ResponseException. */
        class ResponseException implements IResponseException {

            /**
             * Constructs a new ResponseException.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseException);

            /** ResponseException error. */
            public error: string;

            /**
             * Creates a new ResponseException instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseException instance
             */
            public static create(properties?: tendermint.abci.IResponseException): tendermint.abci.ResponseException;

            /**
             * Encodes the specified ResponseException message. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @param message ResponseException message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseException message, length delimited. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @param message ResponseException message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseException message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseException;

            /**
             * Decodes a ResponseException message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseException;

            /**
             * Verifies a ResponseException message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseException message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseException
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseException;

            /**
             * Creates a plain object from a ResponseException message. Also converts values to other types if specified.
             * @param message ResponseException
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseException, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseException to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseEcho. */
        interface IResponseEcho {

            /** ResponseEcho message */
            message?: (string|null);
        }

        /** Represents a ResponseEcho. */
        class ResponseEcho implements IResponseEcho {

            /**
             * Constructs a new ResponseEcho.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseEcho);

            /** ResponseEcho message. */
            public message: string;

            /**
             * Creates a new ResponseEcho instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseEcho instance
             */
            public static create(properties?: tendermint.abci.IResponseEcho): tendermint.abci.ResponseEcho;

            /**
             * Encodes the specified ResponseEcho message. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @param message ResponseEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseEcho message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @param message ResponseEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseEcho;

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseEcho;

            /**
             * Verifies a ResponseEcho message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseEcho message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseEcho
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseEcho;

            /**
             * Creates a plain object from a ResponseEcho message. Also converts values to other types if specified.
             * @param message ResponseEcho
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseEcho to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseFlush. */
        interface IResponseFlush {
        }

        /** Represents a ResponseFlush. */
        class ResponseFlush implements IResponseFlush {

            /**
             * Constructs a new ResponseFlush.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseFlush);

            /**
             * Creates a new ResponseFlush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseFlush instance
             */
            public static create(properties?: tendermint.abci.IResponseFlush): tendermint.abci.ResponseFlush;

            /**
             * Encodes the specified ResponseFlush message. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @param message ResponseFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseFlush message, length delimited. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @param message ResponseFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseFlush;

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseFlush;

            /**
             * Verifies a ResponseFlush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseFlush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseFlush
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseFlush;

            /**
             * Creates a plain object from a ResponseFlush message. Also converts values to other types if specified.
             * @param message ResponseFlush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseFlush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseInfo. */
        interface IResponseInfo {

            /** ResponseInfo data */
            data?: (string|null);

            /** ResponseInfo version */
            version?: (string|null);

            /** ResponseInfo appVersion */
            appVersion?: (number|Long|null);

            /** ResponseInfo lastBlockHeight */
            lastBlockHeight?: (number|Long|null);

            /** ResponseInfo lastBlockAppHash */
            lastBlockAppHash?: (Uint8Array|null);
        }

        /** Represents a ResponseInfo. */
        class ResponseInfo implements IResponseInfo {

            /**
             * Constructs a new ResponseInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseInfo);

            /** ResponseInfo data. */
            public data: string;

            /** ResponseInfo version. */
            public version: string;

            /** ResponseInfo appVersion. */
            public appVersion: (number|Long);

            /** ResponseInfo lastBlockHeight. */
            public lastBlockHeight: (number|Long);

            /** ResponseInfo lastBlockAppHash. */
            public lastBlockAppHash: Uint8Array;

            /**
             * Creates a new ResponseInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseInfo instance
             */
            public static create(properties?: tendermint.abci.IResponseInfo): tendermint.abci.ResponseInfo;

            /**
             * Encodes the specified ResponseInfo message. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @param message ResponseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseInfo message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @param message ResponseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseInfo;

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseInfo;

            /**
             * Verifies a ResponseInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseInfo;

            /**
             * Creates a plain object from a ResponseInfo message. Also converts values to other types if specified.
             * @param message ResponseInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseSetOption. */
        interface IResponseSetOption {

            /** ResponseSetOption code */
            code?: (number|null);

            /** ResponseSetOption log */
            log?: (string|null);

            /** ResponseSetOption info */
            info?: (string|null);
        }

        /** Represents a ResponseSetOption. */
        class ResponseSetOption implements IResponseSetOption {

            /**
             * Constructs a new ResponseSetOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseSetOption);

            /** ResponseSetOption code. */
            public code: number;

            /** ResponseSetOption log. */
            public log: string;

            /** ResponseSetOption info. */
            public info: string;

            /**
             * Creates a new ResponseSetOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseSetOption instance
             */
            public static create(properties?: tendermint.abci.IResponseSetOption): tendermint.abci.ResponseSetOption;

            /**
             * Encodes the specified ResponseSetOption message. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @param message ResponseSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseSetOption message, length delimited. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @param message ResponseSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseSetOption;

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseSetOption;

            /**
             * Verifies a ResponseSetOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseSetOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseSetOption
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseSetOption;

            /**
             * Creates a plain object from a ResponseSetOption message. Also converts values to other types if specified.
             * @param message ResponseSetOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseSetOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseInitChain. */
        interface IResponseInitChain {

            /** ResponseInitChain consensusParams */
            consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** ResponseInitChain validators */
            validators?: (tendermint.abci.IValidatorUpdate[]|null);

            /** ResponseInitChain appHash */
            appHash?: (Uint8Array|null);
        }

        /** Represents a ResponseInitChain. */
        class ResponseInitChain implements IResponseInitChain {

            /**
             * Constructs a new ResponseInitChain.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseInitChain);

            /** ResponseInitChain consensusParams. */
            public consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** ResponseInitChain validators. */
            public validators: tendermint.abci.IValidatorUpdate[];

            /** ResponseInitChain appHash. */
            public appHash: Uint8Array;

            /**
             * Creates a new ResponseInitChain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseInitChain instance
             */
            public static create(properties?: tendermint.abci.IResponseInitChain): tendermint.abci.ResponseInitChain;

            /**
             * Encodes the specified ResponseInitChain message. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @param message ResponseInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseInitChain message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @param message ResponseInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseInitChain;

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseInitChain;

            /**
             * Verifies a ResponseInitChain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseInitChain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseInitChain
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseInitChain;

            /**
             * Creates a plain object from a ResponseInitChain message. Also converts values to other types if specified.
             * @param message ResponseInitChain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseInitChain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseQuery. */
        interface IResponseQuery {

            /** ResponseQuery code */
            code?: (number|null);

            /** ResponseQuery log */
            log?: (string|null);

            /** ResponseQuery info */
            info?: (string|null);

            /** ResponseQuery index */
            index?: (number|Long|null);

            /** ResponseQuery key */
            key?: (Uint8Array|null);

            /** ResponseQuery value */
            value?: (Uint8Array|null);

            /** ResponseQuery proofOps */
            proofOps?: (tendermint.crypto.IProofOps|null);

            /** ResponseQuery height */
            height?: (number|Long|null);

            /** ResponseQuery codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseQuery. */
        class ResponseQuery implements IResponseQuery {

            /**
             * Constructs a new ResponseQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseQuery);

            /** ResponseQuery code. */
            public code: number;

            /** ResponseQuery log. */
            public log: string;

            /** ResponseQuery info. */
            public info: string;

            /** ResponseQuery index. */
            public index: (number|Long);

            /** ResponseQuery key. */
            public key: Uint8Array;

            /** ResponseQuery value. */
            public value: Uint8Array;

            /** ResponseQuery proofOps. */
            public proofOps?: (tendermint.crypto.IProofOps|null);

            /** ResponseQuery height. */
            public height: (number|Long);

            /** ResponseQuery codespace. */
            public codespace: string;

            /**
             * Creates a new ResponseQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseQuery instance
             */
            public static create(properties?: tendermint.abci.IResponseQuery): tendermint.abci.ResponseQuery;

            /**
             * Encodes the specified ResponseQuery message. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @param message ResponseQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseQuery message, length delimited. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @param message ResponseQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseQuery;

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseQuery;

            /**
             * Verifies a ResponseQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseQuery
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseQuery;

            /**
             * Creates a plain object from a ResponseQuery message. Also converts values to other types if specified.
             * @param message ResponseQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseBeginBlock. */
        interface IResponseBeginBlock {

            /** ResponseBeginBlock events */
            events?: (tendermint.abci.IEvent[]|null);
        }

        /** Represents a ResponseBeginBlock. */
        class ResponseBeginBlock implements IResponseBeginBlock {

            /**
             * Constructs a new ResponseBeginBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseBeginBlock);

            /** ResponseBeginBlock events. */
            public events: tendermint.abci.IEvent[];

            /**
             * Creates a new ResponseBeginBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseBeginBlock instance
             */
            public static create(properties?: tendermint.abci.IResponseBeginBlock): tendermint.abci.ResponseBeginBlock;

            /**
             * Encodes the specified ResponseBeginBlock message. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @param message ResponseBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @param message ResponseBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseBeginBlock;

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseBeginBlock;

            /**
             * Verifies a ResponseBeginBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseBeginBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseBeginBlock;

            /**
             * Creates a plain object from a ResponseBeginBlock message. Also converts values to other types if specified.
             * @param message ResponseBeginBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseBeginBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseCheckTx. */
        interface IResponseCheckTx {

            /** ResponseCheckTx code */
            code?: (number|null);

            /** ResponseCheckTx data */
            data?: (Uint8Array|null);

            /** ResponseCheckTx log */
            log?: (string|null);

            /** ResponseCheckTx info */
            info?: (string|null);

            /** ResponseCheckTx gasWanted */
            gasWanted?: (number|Long|null);

            /** ResponseCheckTx gasUsed */
            gasUsed?: (number|Long|null);

            /** ResponseCheckTx events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseCheckTx codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseCheckTx. */
        class ResponseCheckTx implements IResponseCheckTx {

            /**
             * Constructs a new ResponseCheckTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseCheckTx);

            /** ResponseCheckTx code. */
            public code: number;

            /** ResponseCheckTx data. */
            public data: Uint8Array;

            /** ResponseCheckTx log. */
            public log: string;

            /** ResponseCheckTx info. */
            public info: string;

            /** ResponseCheckTx gasWanted. */
            public gasWanted: (number|Long);

            /** ResponseCheckTx gasUsed. */
            public gasUsed: (number|Long);

            /** ResponseCheckTx events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseCheckTx codespace. */
            public codespace: string;

            /**
             * Creates a new ResponseCheckTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseCheckTx instance
             */
            public static create(properties?: tendermint.abci.IResponseCheckTx): tendermint.abci.ResponseCheckTx;

            /**
             * Encodes the specified ResponseCheckTx message. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @param message ResponseCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @param message ResponseCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseCheckTx;

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseCheckTx;

            /**
             * Verifies a ResponseCheckTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseCheckTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseCheckTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseCheckTx;

            /**
             * Creates a plain object from a ResponseCheckTx message. Also converts values to other types if specified.
             * @param message ResponseCheckTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseCheckTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseDeliverTx. */
        interface IResponseDeliverTx {

            /** ResponseDeliverTx code */
            code?: (number|null);

            /** ResponseDeliverTx data */
            data?: (Uint8Array|null);

            /** ResponseDeliverTx log */
            log?: (string|null);

            /** ResponseDeliverTx info */
            info?: (string|null);

            /** ResponseDeliverTx gasWanted */
            gasWanted?: (number|Long|null);

            /** ResponseDeliverTx gasUsed */
            gasUsed?: (number|Long|null);

            /** ResponseDeliverTx events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseDeliverTx codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseDeliverTx. */
        class ResponseDeliverTx implements IResponseDeliverTx {

            /**
             * Constructs a new ResponseDeliverTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseDeliverTx);

            /** ResponseDeliverTx code. */
            public code: number;

            /** ResponseDeliverTx data. */
            public data: Uint8Array;

            /** ResponseDeliverTx log. */
            public log: string;

            /** ResponseDeliverTx info. */
            public info: string;

            /** ResponseDeliverTx gasWanted. */
            public gasWanted: (number|Long);

            /** ResponseDeliverTx gasUsed. */
            public gasUsed: (number|Long);

            /** ResponseDeliverTx events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseDeliverTx codespace. */
            public codespace: string;

            /**
             * Creates a new ResponseDeliverTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseDeliverTx instance
             */
            public static create(properties?: tendermint.abci.IResponseDeliverTx): tendermint.abci.ResponseDeliverTx;

            /**
             * Encodes the specified ResponseDeliverTx message. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @param message ResponseDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @param message ResponseDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseDeliverTx;

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseDeliverTx;

            /**
             * Verifies a ResponseDeliverTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseDeliverTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseDeliverTx;

            /**
             * Creates a plain object from a ResponseDeliverTx message. Also converts values to other types if specified.
             * @param message ResponseDeliverTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseDeliverTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseEndBlock. */
        interface IResponseEndBlock {

            /** ResponseEndBlock validatorUpdates */
            validatorUpdates?: (tendermint.abci.IValidatorUpdate[]|null);

            /** ResponseEndBlock consensusParamUpdates */
            consensusParamUpdates?: (tendermint.abci.IConsensusParams|null);

            /** ResponseEndBlock events */
            events?: (tendermint.abci.IEvent[]|null);
        }

        /** Represents a ResponseEndBlock. */
        class ResponseEndBlock implements IResponseEndBlock {

            /**
             * Constructs a new ResponseEndBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseEndBlock);

            /** ResponseEndBlock validatorUpdates. */
            public validatorUpdates: tendermint.abci.IValidatorUpdate[];

            /** ResponseEndBlock consensusParamUpdates. */
            public consensusParamUpdates?: (tendermint.abci.IConsensusParams|null);

            /** ResponseEndBlock events. */
            public events: tendermint.abci.IEvent[];

            /**
             * Creates a new ResponseEndBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseEndBlock instance
             */
            public static create(properties?: tendermint.abci.IResponseEndBlock): tendermint.abci.ResponseEndBlock;

            /**
             * Encodes the specified ResponseEndBlock message. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @param message ResponseEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @param message ResponseEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseEndBlock;

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseEndBlock;

            /**
             * Verifies a ResponseEndBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseEndBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseEndBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseEndBlock;

            /**
             * Creates a plain object from a ResponseEndBlock message. Also converts values to other types if specified.
             * @param message ResponseEndBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseEndBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseCommit. */
        interface IResponseCommit {

            /** ResponseCommit data */
            data?: (Uint8Array|null);

            /** ResponseCommit retainHeight */
            retainHeight?: (number|Long|null);
        }

        /** Represents a ResponseCommit. */
        class ResponseCommit implements IResponseCommit {

            /**
             * Constructs a new ResponseCommit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseCommit);

            /** ResponseCommit data. */
            public data: Uint8Array;

            /** ResponseCommit retainHeight. */
            public retainHeight: (number|Long);

            /**
             * Creates a new ResponseCommit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseCommit instance
             */
            public static create(properties?: tendermint.abci.IResponseCommit): tendermint.abci.ResponseCommit;

            /**
             * Encodes the specified ResponseCommit message. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @param message ResponseCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseCommit message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @param message ResponseCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseCommit;

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseCommit;

            /**
             * Verifies a ResponseCommit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseCommit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseCommit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseCommit;

            /**
             * Creates a plain object from a ResponseCommit message. Also converts values to other types if specified.
             * @param message ResponseCommit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseCommit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseListSnapshots. */
        interface IResponseListSnapshots {

            /** ResponseListSnapshots snapshots */
            snapshots?: (tendermint.abci.ISnapshot[]|null);
        }

        /** Represents a ResponseListSnapshots. */
        class ResponseListSnapshots implements IResponseListSnapshots {

            /**
             * Constructs a new ResponseListSnapshots.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseListSnapshots);

            /** ResponseListSnapshots snapshots. */
            public snapshots: tendermint.abci.ISnapshot[];

            /**
             * Creates a new ResponseListSnapshots instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseListSnapshots instance
             */
            public static create(properties?: tendermint.abci.IResponseListSnapshots): tendermint.abci.ResponseListSnapshots;

            /**
             * Encodes the specified ResponseListSnapshots message. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @param message ResponseListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @param message ResponseListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseListSnapshots;

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseListSnapshots;

            /**
             * Verifies a ResponseListSnapshots message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseListSnapshots
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseListSnapshots;

            /**
             * Creates a plain object from a ResponseListSnapshots message. Also converts values to other types if specified.
             * @param message ResponseListSnapshots
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseListSnapshots, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseListSnapshots to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseOfferSnapshot. */
        interface IResponseOfferSnapshot {

            /** ResponseOfferSnapshot result */
            result?: (tendermint.abci.ResponseOfferSnapshot.Result|null);
        }

        /** Represents a ResponseOfferSnapshot. */
        class ResponseOfferSnapshot implements IResponseOfferSnapshot {

            /**
             * Constructs a new ResponseOfferSnapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseOfferSnapshot);

            /** ResponseOfferSnapshot result. */
            public result: tendermint.abci.ResponseOfferSnapshot.Result;

            /**
             * Creates a new ResponseOfferSnapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseOfferSnapshot instance
             */
            public static create(properties?: tendermint.abci.IResponseOfferSnapshot): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Encodes the specified ResponseOfferSnapshot message. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @param message ResponseOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @param message ResponseOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Verifies a ResponseOfferSnapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseOfferSnapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Creates a plain object from a ResponseOfferSnapshot message. Also converts values to other types if specified.
             * @param message ResponseOfferSnapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseOfferSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseOfferSnapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseOfferSnapshot {

            /** Result enum. */
            enum Result {
                UNKNOWN = 0,
                ACCEPT = 1,
                ABORT = 2,
                REJECT = 3,
                REJECT_FORMAT = 4,
                REJECT_SENDER = 5
            }
        }

        /** Properties of a ResponseLoadSnapshotChunk. */
        interface IResponseLoadSnapshotChunk {

            /** ResponseLoadSnapshotChunk chunk */
            chunk?: (Uint8Array|null);
        }

        /** Represents a ResponseLoadSnapshotChunk. */
        class ResponseLoadSnapshotChunk implements IResponseLoadSnapshotChunk {

            /**
             * Constructs a new ResponseLoadSnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseLoadSnapshotChunk);

            /** ResponseLoadSnapshotChunk chunk. */
            public chunk: Uint8Array;

            /**
             * Creates a new ResponseLoadSnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseLoadSnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IResponseLoadSnapshotChunk): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @param message ResponseLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @param message ResponseLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Verifies a ResponseLoadSnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseLoadSnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Creates a plain object from a ResponseLoadSnapshotChunk message. Also converts values to other types if specified.
             * @param message ResponseLoadSnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseLoadSnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseLoadSnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseApplySnapshotChunk. */
        interface IResponseApplySnapshotChunk {

            /** ResponseApplySnapshotChunk result */
            result?: (tendermint.abci.ResponseApplySnapshotChunk.Result|null);

            /** ResponseApplySnapshotChunk refetchChunks */
            refetchChunks?: (number[]|null);

            /** ResponseApplySnapshotChunk rejectSenders */
            rejectSenders?: (string[]|null);
        }

        /** Represents a ResponseApplySnapshotChunk. */
        class ResponseApplySnapshotChunk implements IResponseApplySnapshotChunk {

            /**
             * Constructs a new ResponseApplySnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseApplySnapshotChunk);

            /** ResponseApplySnapshotChunk result. */
            public result: tendermint.abci.ResponseApplySnapshotChunk.Result;

            /** ResponseApplySnapshotChunk refetchChunks. */
            public refetchChunks: number[];

            /** ResponseApplySnapshotChunk rejectSenders. */
            public rejectSenders: string[];

            /**
             * Creates a new ResponseApplySnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseApplySnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IResponseApplySnapshotChunk): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Encodes the specified ResponseApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @param message ResponseApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @param message ResponseApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Verifies a ResponseApplySnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseApplySnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Creates a plain object from a ResponseApplySnapshotChunk message. Also converts values to other types if specified.
             * @param message ResponseApplySnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseApplySnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseApplySnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseApplySnapshotChunk {

            /** Result enum. */
            enum Result {
                UNKNOWN = 0,
                ACCEPT = 1,
                ABORT = 2,
                RETRY = 3,
                RETRY_SNAPSHOT = 4,
                REJECT_SNAPSHOT = 5
            }
        }

        /** Properties of a ConsensusParams. */
        interface IConsensusParams {

            /** ConsensusParams block */
            block?: (tendermint.abci.IBlockParams|null);

            /** ConsensusParams evidence */
            evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator */
            validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version */
            version?: (tendermint.types.IVersionParams|null);
        }

        /** Represents a ConsensusParams. */
        class ConsensusParams implements IConsensusParams {

            /**
             * Constructs a new ConsensusParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IConsensusParams);

            /** ConsensusParams block. */
            public block?: (tendermint.abci.IBlockParams|null);

            /** ConsensusParams evidence. */
            public evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator. */
            public validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version. */
            public version?: (tendermint.types.IVersionParams|null);

            /**
             * Creates a new ConsensusParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsensusParams instance
             */
            public static create(properties?: tendermint.abci.IConsensusParams): tendermint.abci.ConsensusParams;

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ConsensusParams;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ConsensusParams;

            /**
             * Verifies a ConsensusParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsensusParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ConsensusParams;

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @param message ConsensusParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ConsensusParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsensusParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockParams. */
        interface IBlockParams {

            /** BlockParams maxBytes */
            maxBytes?: (number|Long|null);

            /** BlockParams maxGas */
            maxGas?: (number|Long|null);
        }

        /** Represents a BlockParams. */
        class BlockParams implements IBlockParams {

            /**
             * Constructs a new BlockParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IBlockParams);

            /** BlockParams maxBytes. */
            public maxBytes: (number|Long);

            /** BlockParams maxGas. */
            public maxGas: (number|Long);

            /**
             * Creates a new BlockParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockParams instance
             */
            public static create(properties?: tendermint.abci.IBlockParams): tendermint.abci.BlockParams;

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.BlockParams;

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.BlockParams;

            /**
             * Verifies a BlockParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.BlockParams;

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @param message BlockParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.BlockParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LastCommitInfo. */
        interface ILastCommitInfo {

            /** LastCommitInfo round */
            round?: (number|null);

            /** LastCommitInfo votes */
            votes?: (tendermint.abci.IVoteInfo[]|null);
        }

        /** Represents a LastCommitInfo. */
        class LastCommitInfo implements ILastCommitInfo {

            /**
             * Constructs a new LastCommitInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ILastCommitInfo);

            /** LastCommitInfo round. */
            public round: number;

            /** LastCommitInfo votes. */
            public votes: tendermint.abci.IVoteInfo[];

            /**
             * Creates a new LastCommitInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LastCommitInfo instance
             */
            public static create(properties?: tendermint.abci.ILastCommitInfo): tendermint.abci.LastCommitInfo;

            /**
             * Encodes the specified LastCommitInfo message. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @param message LastCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastCommitInfo message, length delimited. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @param message LastCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.LastCommitInfo;

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.LastCommitInfo;

            /**
             * Verifies a LastCommitInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastCommitInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastCommitInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.LastCommitInfo;

            /**
             * Creates a plain object from a LastCommitInfo message. Also converts values to other types if specified.
             * @param message LastCommitInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.LastCommitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastCommitInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Event. */
        interface IEvent {

            /** Event type */
            type?: (string|null);

            /** Event attributes */
            attributes?: (tendermint.abci.IEventAttribute[]|null);
        }

        /** Represents an Event. */
        class Event implements IEvent {

            /**
             * Constructs a new Event.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEvent);

            /** Event type. */
            public type: string;

            /** Event attributes. */
            public attributes: tendermint.abci.IEventAttribute[];

            /**
             * Creates a new Event instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Event instance
             */
            public static create(properties?: tendermint.abci.IEvent): tendermint.abci.Event;

            /**
             * Encodes the specified Event message. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Event;

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Event;

            /**
             * Verifies an Event message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Event
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Event;

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @param message Event
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Event to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EventAttribute. */
        interface IEventAttribute {

            /** EventAttribute key */
            key?: (Uint8Array|null);

            /** EventAttribute value */
            value?: (Uint8Array|null);

            /** EventAttribute index */
            index?: (boolean|null);
        }

        /** Represents an EventAttribute. */
        class EventAttribute implements IEventAttribute {

            /**
             * Constructs a new EventAttribute.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEventAttribute);

            /** EventAttribute key. */
            public key: Uint8Array;

            /** EventAttribute value. */
            public value: Uint8Array;

            /** EventAttribute index. */
            public index: boolean;

            /**
             * Creates a new EventAttribute instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EventAttribute instance
             */
            public static create(properties?: tendermint.abci.IEventAttribute): tendermint.abci.EventAttribute;

            /**
             * Encodes the specified EventAttribute message. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @param message EventAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEventAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EventAttribute message, length delimited. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @param message EventAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEventAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventAttribute message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.EventAttribute;

            /**
             * Decodes an EventAttribute message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.EventAttribute;

            /**
             * Verifies an EventAttribute message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EventAttribute message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EventAttribute
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.EventAttribute;

            /**
             * Creates a plain object from an EventAttribute message. Also converts values to other types if specified.
             * @param message EventAttribute
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.EventAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EventAttribute to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TxResult. */
        interface ITxResult {

            /** TxResult height */
            height?: (number|Long|null);

            /** TxResult index */
            index?: (number|null);

            /** TxResult tx */
            tx?: (Uint8Array|null);

            /** TxResult result */
            result?: (tendermint.abci.IResponseDeliverTx|null);
        }

        /** Represents a TxResult. */
        class TxResult implements ITxResult {

            /**
             * Constructs a new TxResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ITxResult);

            /** TxResult height. */
            public height: (number|Long);

            /** TxResult index. */
            public index: number;

            /** TxResult tx. */
            public tx: Uint8Array;

            /** TxResult result. */
            public result?: (tendermint.abci.IResponseDeliverTx|null);

            /**
             * Creates a new TxResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxResult instance
             */
            public static create(properties?: tendermint.abci.ITxResult): tendermint.abci.TxResult;

            /**
             * Encodes the specified TxResult message. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @param message TxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ITxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxResult message, length delimited. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @param message TxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ITxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.TxResult;

            /**
             * Decodes a TxResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.TxResult;

            /**
             * Verifies a TxResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxResult
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.TxResult;

            /**
             * Creates a plain object from a TxResult message. Also converts values to other types if specified.
             * @param message TxResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.TxResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Validator. */
        interface IValidator {

            /** Validator address */
            address?: (Uint8Array|null);

            /** Validator power */
            power?: (number|Long|null);
        }

        /** Represents a Validator. */
        class Validator implements IValidator {

            /**
             * Constructs a new Validator.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidator);

            /** Validator address. */
            public address: Uint8Array;

            /** Validator power. */
            public power: (number|Long);

            /**
             * Creates a new Validator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validator instance
             */
            public static create(properties?: tendermint.abci.IValidator): tendermint.abci.Validator;

            /**
             * Encodes the specified Validator message. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Validator message, length delimited. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validator message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Validator;

            /**
             * Decodes a Validator message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Validator;

            /**
             * Verifies a Validator message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Validator message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Validator
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Validator;

            /**
             * Creates a plain object from a Validator message. Also converts values to other types if specified.
             * @param message Validator
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Validator, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Validator to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorUpdate. */
        interface IValidatorUpdate {

            /** ValidatorUpdate pubKey */
            pubKey?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorUpdate power */
            power?: (number|Long|null);
        }

        /** Represents a ValidatorUpdate. */
        class ValidatorUpdate implements IValidatorUpdate {

            /**
             * Constructs a new ValidatorUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidatorUpdate);

            /** ValidatorUpdate pubKey. */
            public pubKey?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorUpdate power. */
            public power: (number|Long);

            /**
             * Creates a new ValidatorUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorUpdate instance
             */
            public static create(properties?: tendermint.abci.IValidatorUpdate): tendermint.abci.ValidatorUpdate;

            /**
             * Encodes the specified ValidatorUpdate message. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @param message ValidatorUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorUpdate message, length delimited. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @param message ValidatorUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ValidatorUpdate;

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ValidatorUpdate;

            /**
             * Verifies a ValidatorUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorUpdate
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ValidatorUpdate;

            /**
             * Creates a plain object from a ValidatorUpdate message. Also converts values to other types if specified.
             * @param message ValidatorUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ValidatorUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VoteInfo. */
        interface IVoteInfo {

            /** VoteInfo validator */
            validator?: (tendermint.abci.IValidator|null);

            /** VoteInfo signedLastBlock */
            signedLastBlock?: (boolean|null);
        }

        /** Represents a VoteInfo. */
        class VoteInfo implements IVoteInfo {

            /**
             * Constructs a new VoteInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IVoteInfo);

            /** VoteInfo validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** VoteInfo signedLastBlock. */
            public signedLastBlock: boolean;

            /**
             * Creates a new VoteInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VoteInfo instance
             */
            public static create(properties?: tendermint.abci.IVoteInfo): tendermint.abci.VoteInfo;

            /**
             * Encodes the specified VoteInfo message. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @param message VoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoteInfo message, length delimited. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @param message VoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoteInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.VoteInfo;

            /**
             * Decodes a VoteInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.VoteInfo;

            /**
             * Verifies a VoteInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoteInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoteInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.VoteInfo;

            /**
             * Creates a plain object from a VoteInfo message. Also converts values to other types if specified.
             * @param message VoteInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.VoteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoteInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** EvidenceType enum. */
        enum EvidenceType {
            UNKNOWN = 0,
            DUPLICATE_VOTE = 1,
            LIGHT_CLIENT_ATTACK = 2
        }

        /** Properties of an Evidence. */
        interface IEvidence {

            /** Evidence type */
            type?: (tendermint.abci.EvidenceType|null);

            /** Evidence validator */
            validator?: (tendermint.abci.IValidator|null);

            /** Evidence height */
            height?: (number|Long|null);

            /** Evidence time */
            time?: (google.protobuf.ITimestamp|null);

            /** Evidence totalVotingPower */
            totalVotingPower?: (number|Long|null);
        }

        /** Represents an Evidence. */
        class Evidence implements IEvidence {

            /**
             * Constructs a new Evidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEvidence);

            /** Evidence type. */
            public type: tendermint.abci.EvidenceType;

            /** Evidence validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** Evidence height. */
            public height: (number|Long);

            /** Evidence time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** Evidence totalVotingPower. */
            public totalVotingPower: (number|Long);

            /**
             * Creates a new Evidence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Evidence instance
             */
            public static create(properties?: tendermint.abci.IEvidence): tendermint.abci.Evidence;

            /**
             * Encodes the specified Evidence message. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Evidence message, length delimited. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Evidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Evidence;

            /**
             * Decodes an Evidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Evidence;

            /**
             * Verifies an Evidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Evidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Evidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Evidence;

            /**
             * Creates a plain object from an Evidence message. Also converts values to other types if specified.
             * @param message Evidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Evidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Evidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Snapshot. */
        interface ISnapshot {

            /** Snapshot height */
            height?: (number|Long|null);

            /** Snapshot format */
            format?: (number|null);

            /** Snapshot chunks */
            chunks?: (number|null);

            /** Snapshot hash */
            hash?: (Uint8Array|null);

            /** Snapshot metadata */
            metadata?: (Uint8Array|null);
        }

        /** Represents a Snapshot. */
        class Snapshot implements ISnapshot {

            /**
             * Constructs a new Snapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ISnapshot);

            /** Snapshot height. */
            public height: (number|Long);

            /** Snapshot format. */
            public format: number;

            /** Snapshot chunks. */
            public chunks: number;

            /** Snapshot hash. */
            public hash: Uint8Array;

            /** Snapshot metadata. */
            public metadata: Uint8Array;

            /**
             * Creates a new Snapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Snapshot instance
             */
            public static create(properties?: tendermint.abci.ISnapshot): tendermint.abci.Snapshot;

            /**
             * Encodes the specified Snapshot message. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Snapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Snapshot;

            /**
             * Decodes a Snapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Snapshot;

            /**
             * Verifies a Snapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Snapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Snapshot;

            /**
             * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
             * @param message Snapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Snapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ABCIApplication */
        class ABCIApplication extends $protobuf.rpc.Service {

            /**
             * Constructs a new ABCIApplication service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ABCIApplication service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ABCIApplication;

            /**
             * Calls Echo.
             * @param request RequestEcho message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseEcho
             */
            public echo(request: tendermint.abci.IRequestEcho, callback: tendermint.abci.ABCIApplication.EchoCallback): void;

            /**
             * Calls Echo.
             * @param request RequestEcho message or plain object
             * @returns Promise
             */
            public echo(request: tendermint.abci.IRequestEcho): Promise<tendermint.abci.ResponseEcho>;

            /**
             * Calls Flush.
             * @param request RequestFlush message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseFlush
             */
            public flush(request: tendermint.abci.IRequestFlush, callback: tendermint.abci.ABCIApplication.FlushCallback): void;

            /**
             * Calls Flush.
             * @param request RequestFlush message or plain object
             * @returns Promise
             */
            public flush(request: tendermint.abci.IRequestFlush): Promise<tendermint.abci.ResponseFlush>;

            /**
             * Calls Info.
             * @param request RequestInfo message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseInfo
             */
            public info(request: tendermint.abci.IRequestInfo, callback: tendermint.abci.ABCIApplication.InfoCallback): void;

            /**
             * Calls Info.
             * @param request RequestInfo message or plain object
             * @returns Promise
             */
            public info(request: tendermint.abci.IRequestInfo): Promise<tendermint.abci.ResponseInfo>;

            /**
             * Calls SetOption.
             * @param request RequestSetOption message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseSetOption
             */
            public setOption(request: tendermint.abci.IRequestSetOption, callback: tendermint.abci.ABCIApplication.SetOptionCallback): void;

            /**
             * Calls SetOption.
             * @param request RequestSetOption message or plain object
             * @returns Promise
             */
            public setOption(request: tendermint.abci.IRequestSetOption): Promise<tendermint.abci.ResponseSetOption>;

            /**
             * Calls DeliverTx.
             * @param request RequestDeliverTx message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseDeliverTx
             */
            public deliverTx(request: tendermint.abci.IRequestDeliverTx, callback: tendermint.abci.ABCIApplication.DeliverTxCallback): void;

            /**
             * Calls DeliverTx.
             * @param request RequestDeliverTx message or plain object
             * @returns Promise
             */
            public deliverTx(request: tendermint.abci.IRequestDeliverTx): Promise<tendermint.abci.ResponseDeliverTx>;

            /**
             * Calls CheckTx.
             * @param request RequestCheckTx message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseCheckTx
             */
            public checkTx(request: tendermint.abci.IRequestCheckTx, callback: tendermint.abci.ABCIApplication.CheckTxCallback): void;

            /**
             * Calls CheckTx.
             * @param request RequestCheckTx message or plain object
             * @returns Promise
             */
            public checkTx(request: tendermint.abci.IRequestCheckTx): Promise<tendermint.abci.ResponseCheckTx>;

            /**
             * Calls Query.
             * @param request RequestQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseQuery
             */
            public query(request: tendermint.abci.IRequestQuery, callback: tendermint.abci.ABCIApplication.QueryCallback): void;

            /**
             * Calls Query.
             * @param request RequestQuery message or plain object
             * @returns Promise
             */
            public query(request: tendermint.abci.IRequestQuery): Promise<tendermint.abci.ResponseQuery>;

            /**
             * Calls Commit.
             * @param request RequestCommit message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseCommit
             */
            public commit(request: tendermint.abci.IRequestCommit, callback: tendermint.abci.ABCIApplication.CommitCallback): void;

            /**
             * Calls Commit.
             * @param request RequestCommit message or plain object
             * @returns Promise
             */
            public commit(request: tendermint.abci.IRequestCommit): Promise<tendermint.abci.ResponseCommit>;

            /**
             * Calls InitChain.
             * @param request RequestInitChain message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseInitChain
             */
            public initChain(request: tendermint.abci.IRequestInitChain, callback: tendermint.abci.ABCIApplication.InitChainCallback): void;

            /**
             * Calls InitChain.
             * @param request RequestInitChain message or plain object
             * @returns Promise
             */
            public initChain(request: tendermint.abci.IRequestInitChain): Promise<tendermint.abci.ResponseInitChain>;

            /**
             * Calls BeginBlock.
             * @param request RequestBeginBlock message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseBeginBlock
             */
            public beginBlock(request: tendermint.abci.IRequestBeginBlock, callback: tendermint.abci.ABCIApplication.BeginBlockCallback): void;

            /**
             * Calls BeginBlock.
             * @param request RequestBeginBlock message or plain object
             * @returns Promise
             */
            public beginBlock(request: tendermint.abci.IRequestBeginBlock): Promise<tendermint.abci.ResponseBeginBlock>;

            /**
             * Calls EndBlock.
             * @param request RequestEndBlock message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseEndBlock
             */
            public endBlock(request: tendermint.abci.IRequestEndBlock, callback: tendermint.abci.ABCIApplication.EndBlockCallback): void;

            /**
             * Calls EndBlock.
             * @param request RequestEndBlock message or plain object
             * @returns Promise
             */
            public endBlock(request: tendermint.abci.IRequestEndBlock): Promise<tendermint.abci.ResponseEndBlock>;

            /**
             * Calls ListSnapshots.
             * @param request RequestListSnapshots message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseListSnapshots
             */
            public listSnapshots(request: tendermint.abci.IRequestListSnapshots, callback: tendermint.abci.ABCIApplication.ListSnapshotsCallback): void;

            /**
             * Calls ListSnapshots.
             * @param request RequestListSnapshots message or plain object
             * @returns Promise
             */
            public listSnapshots(request: tendermint.abci.IRequestListSnapshots): Promise<tendermint.abci.ResponseListSnapshots>;

            /**
             * Calls OfferSnapshot.
             * @param request RequestOfferSnapshot message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseOfferSnapshot
             */
            public offerSnapshot(request: tendermint.abci.IRequestOfferSnapshot, callback: tendermint.abci.ABCIApplication.OfferSnapshotCallback): void;

            /**
             * Calls OfferSnapshot.
             * @param request RequestOfferSnapshot message or plain object
             * @returns Promise
             */
            public offerSnapshot(request: tendermint.abci.IRequestOfferSnapshot): Promise<tendermint.abci.ResponseOfferSnapshot>;

            /**
             * Calls LoadSnapshotChunk.
             * @param request RequestLoadSnapshotChunk message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseLoadSnapshotChunk
             */
            public loadSnapshotChunk(request: tendermint.abci.IRequestLoadSnapshotChunk, callback: tendermint.abci.ABCIApplication.LoadSnapshotChunkCallback): void;

            /**
             * Calls LoadSnapshotChunk.
             * @param request RequestLoadSnapshotChunk message or plain object
             * @returns Promise
             */
            public loadSnapshotChunk(request: tendermint.abci.IRequestLoadSnapshotChunk): Promise<tendermint.abci.ResponseLoadSnapshotChunk>;

            /**
             * Calls ApplySnapshotChunk.
             * @param request RequestApplySnapshotChunk message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseApplySnapshotChunk
             */
            public applySnapshotChunk(request: tendermint.abci.IRequestApplySnapshotChunk, callback: tendermint.abci.ABCIApplication.ApplySnapshotChunkCallback): void;

            /**
             * Calls ApplySnapshotChunk.
             * @param request RequestApplySnapshotChunk message or plain object
             * @returns Promise
             */
            public applySnapshotChunk(request: tendermint.abci.IRequestApplySnapshotChunk): Promise<tendermint.abci.ResponseApplySnapshotChunk>;
        }

        namespace ABCIApplication {

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#echo}.
             * @param error Error, if any
             * @param [response] ResponseEcho
             */
            type EchoCallback = (error: (Error|null), response?: tendermint.abci.ResponseEcho) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#flush}.
             * @param error Error, if any
             * @param [response] ResponseFlush
             */
            type FlushCallback = (error: (Error|null), response?: tendermint.abci.ResponseFlush) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#info}.
             * @param error Error, if any
             * @param [response] ResponseInfo
             */
            type InfoCallback = (error: (Error|null), response?: tendermint.abci.ResponseInfo) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#setOption}.
             * @param error Error, if any
             * @param [response] ResponseSetOption
             */
            type SetOptionCallback = (error: (Error|null), response?: tendermint.abci.ResponseSetOption) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#deliverTx}.
             * @param error Error, if any
             * @param [response] ResponseDeliverTx
             */
            type DeliverTxCallback = (error: (Error|null), response?: tendermint.abci.ResponseDeliverTx) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#checkTx}.
             * @param error Error, if any
             * @param [response] ResponseCheckTx
             */
            type CheckTxCallback = (error: (Error|null), response?: tendermint.abci.ResponseCheckTx) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#query}.
             * @param error Error, if any
             * @param [response] ResponseQuery
             */
            type QueryCallback = (error: (Error|null), response?: tendermint.abci.ResponseQuery) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#commit}.
             * @param error Error, if any
             * @param [response] ResponseCommit
             */
            type CommitCallback = (error: (Error|null), response?: tendermint.abci.ResponseCommit) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#initChain}.
             * @param error Error, if any
             * @param [response] ResponseInitChain
             */
            type InitChainCallback = (error: (Error|null), response?: tendermint.abci.ResponseInitChain) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#beginBlock}.
             * @param error Error, if any
             * @param [response] ResponseBeginBlock
             */
            type BeginBlockCallback = (error: (Error|null), response?: tendermint.abci.ResponseBeginBlock) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#endBlock}.
             * @param error Error, if any
             * @param [response] ResponseEndBlock
             */
            type EndBlockCallback = (error: (Error|null), response?: tendermint.abci.ResponseEndBlock) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#listSnapshots}.
             * @param error Error, if any
             * @param [response] ResponseListSnapshots
             */
            type ListSnapshotsCallback = (error: (Error|null), response?: tendermint.abci.ResponseListSnapshots) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#offerSnapshot}.
             * @param error Error, if any
             * @param [response] ResponseOfferSnapshot
             */
            type OfferSnapshotCallback = (error: (Error|null), response?: tendermint.abci.ResponseOfferSnapshot) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#loadSnapshotChunk}.
             * @param error Error, if any
             * @param [response] ResponseLoadSnapshotChunk
             */
            type LoadSnapshotChunkCallback = (error: (Error|null), response?: tendermint.abci.ResponseLoadSnapshotChunk) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#applySnapshotChunk}.
             * @param error Error, if any
             * @param [response] ResponseApplySnapshotChunk
             */
            type ApplySnapshotChunkCallback = (error: (Error|null), response?: tendermint.abci.ResponseApplySnapshotChunk) => void;
        }
    }

    /** Namespace blockchain. */
    namespace blockchain {

        /** Properties of a BlockRequest. */
        interface IBlockRequest {

            /** BlockRequest height */
            height?: (number|Long|null);
        }

        /** Represents a BlockRequest. */
        class BlockRequest implements IBlockRequest {

            /**
             * Constructs a new BlockRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blockchain.IBlockRequest);

            /** BlockRequest height. */
            public height: (number|Long);

            /**
             * Creates a new BlockRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockRequest instance
             */
            public static create(properties?: tendermint.blockchain.IBlockRequest): tendermint.blockchain.BlockRequest;

            /**
             * Encodes the specified BlockRequest message. Does not implicitly {@link tendermint.blockchain.BlockRequest.verify|verify} messages.
             * @param message BlockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blockchain.IBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockRequest message, length delimited. Does not implicitly {@link tendermint.blockchain.BlockRequest.verify|verify} messages.
             * @param message BlockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blockchain.IBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blockchain.BlockRequest;

            /**
             * Decodes a BlockRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blockchain.BlockRequest;

            /**
             * Verifies a BlockRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blockchain.BlockRequest;

            /**
             * Creates a plain object from a BlockRequest message. Also converts values to other types if specified.
             * @param message BlockRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blockchain.BlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NoBlockResponse. */
        interface INoBlockResponse {

            /** NoBlockResponse height */
            height?: (number|Long|null);
        }

        /** Represents a NoBlockResponse. */
        class NoBlockResponse implements INoBlockResponse {

            /**
             * Constructs a new NoBlockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blockchain.INoBlockResponse);

            /** NoBlockResponse height. */
            public height: (number|Long);

            /**
             * Creates a new NoBlockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoBlockResponse instance
             */
            public static create(properties?: tendermint.blockchain.INoBlockResponse): tendermint.blockchain.NoBlockResponse;

            /**
             * Encodes the specified NoBlockResponse message. Does not implicitly {@link tendermint.blockchain.NoBlockResponse.verify|verify} messages.
             * @param message NoBlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blockchain.INoBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoBlockResponse message, length delimited. Does not implicitly {@link tendermint.blockchain.NoBlockResponse.verify|verify} messages.
             * @param message NoBlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blockchain.INoBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoBlockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NoBlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blockchain.NoBlockResponse;

            /**
             * Decodes a NoBlockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NoBlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blockchain.NoBlockResponse;

            /**
             * Verifies a NoBlockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoBlockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoBlockResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blockchain.NoBlockResponse;

            /**
             * Creates a plain object from a NoBlockResponse message. Also converts values to other types if specified.
             * @param message NoBlockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blockchain.NoBlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoBlockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockResponse. */
        interface IBlockResponse {

            /** BlockResponse block */
            block?: (tendermint.types.IBlock|null);
        }

        /** Represents a BlockResponse. */
        class BlockResponse implements IBlockResponse {

            /**
             * Constructs a new BlockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blockchain.IBlockResponse);

            /** BlockResponse block. */
            public block?: (tendermint.types.IBlock|null);

            /**
             * Creates a new BlockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockResponse instance
             */
            public static create(properties?: tendermint.blockchain.IBlockResponse): tendermint.blockchain.BlockResponse;

            /**
             * Encodes the specified BlockResponse message. Does not implicitly {@link tendermint.blockchain.BlockResponse.verify|verify} messages.
             * @param message BlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blockchain.IBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockResponse message, length delimited. Does not implicitly {@link tendermint.blockchain.BlockResponse.verify|verify} messages.
             * @param message BlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blockchain.IBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blockchain.BlockResponse;

            /**
             * Decodes a BlockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blockchain.BlockResponse;

            /**
             * Verifies a BlockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blockchain.BlockResponse;

            /**
             * Creates a plain object from a BlockResponse message. Also converts values to other types if specified.
             * @param message BlockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blockchain.BlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StatusRequest. */
        interface IStatusRequest {
        }

        /** Represents a StatusRequest. */
        class StatusRequest implements IStatusRequest {

            /**
             * Constructs a new StatusRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blockchain.IStatusRequest);

            /**
             * Creates a new StatusRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusRequest instance
             */
            public static create(properties?: tendermint.blockchain.IStatusRequest): tendermint.blockchain.StatusRequest;

            /**
             * Encodes the specified StatusRequest message. Does not implicitly {@link tendermint.blockchain.StatusRequest.verify|verify} messages.
             * @param message StatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blockchain.IStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusRequest message, length delimited. Does not implicitly {@link tendermint.blockchain.StatusRequest.verify|verify} messages.
             * @param message StatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blockchain.IStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blockchain.StatusRequest;

            /**
             * Decodes a StatusRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blockchain.StatusRequest;

            /**
             * Verifies a StatusRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blockchain.StatusRequest;

            /**
             * Creates a plain object from a StatusRequest message. Also converts values to other types if specified.
             * @param message StatusRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blockchain.StatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StatusResponse. */
        interface IStatusResponse {

            /** StatusResponse height */
            height?: (number|Long|null);

            /** StatusResponse base */
            base?: (number|Long|null);
        }

        /** Represents a StatusResponse. */
        class StatusResponse implements IStatusResponse {

            /**
             * Constructs a new StatusResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blockchain.IStatusResponse);

            /** StatusResponse height. */
            public height: (number|Long);

            /** StatusResponse base. */
            public base: (number|Long);

            /**
             * Creates a new StatusResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusResponse instance
             */
            public static create(properties?: tendermint.blockchain.IStatusResponse): tendermint.blockchain.StatusResponse;

            /**
             * Encodes the specified StatusResponse message. Does not implicitly {@link tendermint.blockchain.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blockchain.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link tendermint.blockchain.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blockchain.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blockchain.StatusResponse;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blockchain.StatusResponse;

            /**
             * Verifies a StatusResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blockchain.StatusResponse;

            /**
             * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
             * @param message StatusResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blockchain.StatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message blockRequest */
            blockRequest?: (tendermint.blockchain.IBlockRequest|null);

            /** Message noBlockResponse */
            noBlockResponse?: (tendermint.blockchain.INoBlockResponse|null);

            /** Message blockResponse */
            blockResponse?: (tendermint.blockchain.IBlockResponse|null);

            /** Message statusRequest */
            statusRequest?: (tendermint.blockchain.IStatusRequest|null);

            /** Message statusResponse */
            statusResponse?: (tendermint.blockchain.IStatusResponse|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blockchain.IMessage);

            /** Message blockRequest. */
            public blockRequest?: (tendermint.blockchain.IBlockRequest|null);

            /** Message noBlockResponse. */
            public noBlockResponse?: (tendermint.blockchain.INoBlockResponse|null);

            /** Message blockResponse. */
            public blockResponse?: (tendermint.blockchain.IBlockResponse|null);

            /** Message statusRequest. */
            public statusRequest?: (tendermint.blockchain.IStatusRequest|null);

            /** Message statusResponse. */
            public statusResponse?: (tendermint.blockchain.IStatusResponse|null);

            /** Message sum. */
            public sum?: ("blockRequest"|"noBlockResponse"|"blockResponse"|"statusRequest"|"statusResponse");

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: tendermint.blockchain.IMessage): tendermint.blockchain.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link tendermint.blockchain.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blockchain.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link tendermint.blockchain.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blockchain.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blockchain.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blockchain.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blockchain.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blockchain.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace blocksync. */
    namespace blocksync {

        /** Properties of a BlockRequest. */
        interface IBlockRequest {

            /** BlockRequest height */
            height?: (number|Long|null);
        }

        /** Represents a BlockRequest. */
        class BlockRequest implements IBlockRequest {

            /**
             * Constructs a new BlockRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blocksync.IBlockRequest);

            /** BlockRequest height. */
            public height: (number|Long);

            /**
             * Creates a new BlockRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockRequest instance
             */
            public static create(properties?: tendermint.blocksync.IBlockRequest): tendermint.blocksync.BlockRequest;

            /**
             * Encodes the specified BlockRequest message. Does not implicitly {@link tendermint.blocksync.BlockRequest.verify|verify} messages.
             * @param message BlockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blocksync.IBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockRequest message, length delimited. Does not implicitly {@link tendermint.blocksync.BlockRequest.verify|verify} messages.
             * @param message BlockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blocksync.IBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blocksync.BlockRequest;

            /**
             * Decodes a BlockRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blocksync.BlockRequest;

            /**
             * Verifies a BlockRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blocksync.BlockRequest;

            /**
             * Creates a plain object from a BlockRequest message. Also converts values to other types if specified.
             * @param message BlockRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blocksync.BlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NoBlockResponse. */
        interface INoBlockResponse {

            /** NoBlockResponse height */
            height?: (number|Long|null);
        }

        /** Represents a NoBlockResponse. */
        class NoBlockResponse implements INoBlockResponse {

            /**
             * Constructs a new NoBlockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blocksync.INoBlockResponse);

            /** NoBlockResponse height. */
            public height: (number|Long);

            /**
             * Creates a new NoBlockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoBlockResponse instance
             */
            public static create(properties?: tendermint.blocksync.INoBlockResponse): tendermint.blocksync.NoBlockResponse;

            /**
             * Encodes the specified NoBlockResponse message. Does not implicitly {@link tendermint.blocksync.NoBlockResponse.verify|verify} messages.
             * @param message NoBlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blocksync.INoBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoBlockResponse message, length delimited. Does not implicitly {@link tendermint.blocksync.NoBlockResponse.verify|verify} messages.
             * @param message NoBlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blocksync.INoBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoBlockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NoBlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blocksync.NoBlockResponse;

            /**
             * Decodes a NoBlockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NoBlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blocksync.NoBlockResponse;

            /**
             * Verifies a NoBlockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoBlockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoBlockResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blocksync.NoBlockResponse;

            /**
             * Creates a plain object from a NoBlockResponse message. Also converts values to other types if specified.
             * @param message NoBlockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blocksync.NoBlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoBlockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockResponse. */
        interface IBlockResponse {

            /** BlockResponse block */
            block?: (tendermint.types.IBlock|null);
        }

        /** Represents a BlockResponse. */
        class BlockResponse implements IBlockResponse {

            /**
             * Constructs a new BlockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blocksync.IBlockResponse);

            /** BlockResponse block. */
            public block?: (tendermint.types.IBlock|null);

            /**
             * Creates a new BlockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockResponse instance
             */
            public static create(properties?: tendermint.blocksync.IBlockResponse): tendermint.blocksync.BlockResponse;

            /**
             * Encodes the specified BlockResponse message. Does not implicitly {@link tendermint.blocksync.BlockResponse.verify|verify} messages.
             * @param message BlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blocksync.IBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockResponse message, length delimited. Does not implicitly {@link tendermint.blocksync.BlockResponse.verify|verify} messages.
             * @param message BlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blocksync.IBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blocksync.BlockResponse;

            /**
             * Decodes a BlockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blocksync.BlockResponse;

            /**
             * Verifies a BlockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blocksync.BlockResponse;

            /**
             * Creates a plain object from a BlockResponse message. Also converts values to other types if specified.
             * @param message BlockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blocksync.BlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StatusRequest. */
        interface IStatusRequest {
        }

        /** Represents a StatusRequest. */
        class StatusRequest implements IStatusRequest {

            /**
             * Constructs a new StatusRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blocksync.IStatusRequest);

            /**
             * Creates a new StatusRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusRequest instance
             */
            public static create(properties?: tendermint.blocksync.IStatusRequest): tendermint.blocksync.StatusRequest;

            /**
             * Encodes the specified StatusRequest message. Does not implicitly {@link tendermint.blocksync.StatusRequest.verify|verify} messages.
             * @param message StatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blocksync.IStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusRequest message, length delimited. Does not implicitly {@link tendermint.blocksync.StatusRequest.verify|verify} messages.
             * @param message StatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blocksync.IStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blocksync.StatusRequest;

            /**
             * Decodes a StatusRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blocksync.StatusRequest;

            /**
             * Verifies a StatusRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blocksync.StatusRequest;

            /**
             * Creates a plain object from a StatusRequest message. Also converts values to other types if specified.
             * @param message StatusRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blocksync.StatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StatusResponse. */
        interface IStatusResponse {

            /** StatusResponse height */
            height?: (number|Long|null);

            /** StatusResponse base */
            base?: (number|Long|null);
        }

        /** Represents a StatusResponse. */
        class StatusResponse implements IStatusResponse {

            /**
             * Constructs a new StatusResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blocksync.IStatusResponse);

            /** StatusResponse height. */
            public height: (number|Long);

            /** StatusResponse base. */
            public base: (number|Long);

            /**
             * Creates a new StatusResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusResponse instance
             */
            public static create(properties?: tendermint.blocksync.IStatusResponse): tendermint.blocksync.StatusResponse;

            /**
             * Encodes the specified StatusResponse message. Does not implicitly {@link tendermint.blocksync.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blocksync.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link tendermint.blocksync.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blocksync.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blocksync.StatusResponse;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blocksync.StatusResponse;

            /**
             * Verifies a StatusResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blocksync.StatusResponse;

            /**
             * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
             * @param message StatusResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blocksync.StatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message blockRequest */
            blockRequest?: (tendermint.blocksync.IBlockRequest|null);

            /** Message noBlockResponse */
            noBlockResponse?: (tendermint.blocksync.INoBlockResponse|null);

            /** Message blockResponse */
            blockResponse?: (tendermint.blocksync.IBlockResponse|null);

            /** Message statusRequest */
            statusRequest?: (tendermint.blocksync.IStatusRequest|null);

            /** Message statusResponse */
            statusResponse?: (tendermint.blocksync.IStatusResponse|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.blocksync.IMessage);

            /** Message blockRequest. */
            public blockRequest?: (tendermint.blocksync.IBlockRequest|null);

            /** Message noBlockResponse. */
            public noBlockResponse?: (tendermint.blocksync.INoBlockResponse|null);

            /** Message blockResponse. */
            public blockResponse?: (tendermint.blocksync.IBlockResponse|null);

            /** Message statusRequest. */
            public statusRequest?: (tendermint.blocksync.IStatusRequest|null);

            /** Message statusResponse. */
            public statusResponse?: (tendermint.blocksync.IStatusResponse|null);

            /** Message sum. */
            public sum?: ("blockRequest"|"noBlockResponse"|"blockResponse"|"statusRequest"|"statusResponse");

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: tendermint.blocksync.IMessage): tendermint.blocksync.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link tendermint.blocksync.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.blocksync.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link tendermint.blocksync.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.blocksync.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.blocksync.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.blocksync.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): tendermint.blocksync.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.blocksync.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace consensus. */
    namespace consensus {

        /** Properties of a NewRoundStep. */
        interface INewRoundStep {

            /** NewRoundStep height */
            height?: (number|Long|null);

            /** NewRoundStep round */
            round?: (number|null);

            /** NewRoundStep step */
            step?: (number|null);

            /** NewRoundStep secondsSinceStartTime */
            secondsSinceStartTime?: (number|Long|null);

            /** NewRoundStep lastCommitRound */
            lastCommitRound?: (number|null);
        }

        /** Represents a NewRoundStep. */
        class NewRoundStep implements INewRoundStep {

            /**
             * Constructs a new NewRoundStep.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.INewRoundStep);

            /** NewRoundStep height. */
            public height: (number|Long);

            /** NewRoundStep round. */
            public round: number;

            /** NewRoundStep step. */
            public step: number;

            /** NewRoundStep secondsSinceStartTime. */
            public secondsSinceStartTime: (number|Long);

            /** NewRoundStep lastCommitRound. */
            public lastCommitRound: number;

            /**
             * Creates a new NewRoundStep instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewRoundStep instance
             */
            public static create(properties?: tendermint.consensus.INewRoundStep): tendermint.consensus.NewRoundStep;

            /**
             * Encodes the specified NewRoundStep message. Does not implicitly {@link tendermint.consensus.NewRoundStep.verify|verify} messages.
             * @param message NewRoundStep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.INewRoundStep, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewRoundStep message, length delimited. Does not implicitly {@link tendermint.consensus.NewRoundStep.verify|verify} messages.
             * @param message NewRoundStep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.INewRoundStep, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewRoundStep message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NewRoundStep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.NewRoundStep;

            /**
             * Decodes a NewRoundStep message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NewRoundStep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.NewRoundStep;

            /**
             * Verifies a NewRoundStep message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewRoundStep message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewRoundStep
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.NewRoundStep;

            /**
             * Creates a plain object from a NewRoundStep message. Also converts values to other types if specified.
             * @param message NewRoundStep
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.NewRoundStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewRoundStep to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NewValidBlock. */
        interface INewValidBlock {

            /** NewValidBlock height */
            height?: (number|Long|null);

            /** NewValidBlock round */
            round?: (number|null);

            /** NewValidBlock blockPartSetHeader */
            blockPartSetHeader?: (tendermint.types.IPartSetHeader|null);

            /** NewValidBlock blockParts */
            blockParts?: (tendermint.libs.bits.IBitArray|null);

            /** NewValidBlock isCommit */
            isCommit?: (boolean|null);
        }

        /** Represents a NewValidBlock. */
        class NewValidBlock implements INewValidBlock {

            /**
             * Constructs a new NewValidBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.INewValidBlock);

            /** NewValidBlock height. */
            public height: (number|Long);

            /** NewValidBlock round. */
            public round: number;

            /** NewValidBlock blockPartSetHeader. */
            public blockPartSetHeader?: (tendermint.types.IPartSetHeader|null);

            /** NewValidBlock blockParts. */
            public blockParts?: (tendermint.libs.bits.IBitArray|null);

            /** NewValidBlock isCommit. */
            public isCommit: boolean;

            /**
             * Creates a new NewValidBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewValidBlock instance
             */
            public static create(properties?: tendermint.consensus.INewValidBlock): tendermint.consensus.NewValidBlock;

            /**
             * Encodes the specified NewValidBlock message. Does not implicitly {@link tendermint.consensus.NewValidBlock.verify|verify} messages.
             * @param message NewValidBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.INewValidBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewValidBlock message, length delimited. Does not implicitly {@link tendermint.consensus.NewValidBlock.verify|verify} messages.
             * @param message NewValidBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.INewValidBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewValidBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NewValidBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.NewValidBlock;

            /**
             * Decodes a NewValidBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NewValidBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.NewValidBlock;

            /**
             * Verifies a NewValidBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewValidBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewValidBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.NewValidBlock;

            /**
             * Creates a plain object from a NewValidBlock message. Also converts values to other types if specified.
             * @param message NewValidBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.NewValidBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewValidBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Proposal. */
        interface IProposal {

            /** Proposal proposal */
            proposal?: (tendermint.types.IProposal|null);
        }

        /** Represents a Proposal. */
        class Proposal implements IProposal {

            /**
             * Constructs a new Proposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IProposal);

            /** Proposal proposal. */
            public proposal?: (tendermint.types.IProposal|null);

            /**
             * Creates a new Proposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Proposal instance
             */
            public static create(properties?: tendermint.consensus.IProposal): tendermint.consensus.Proposal;

            /**
             * Encodes the specified Proposal message. Does not implicitly {@link tendermint.consensus.Proposal.verify|verify} messages.
             * @param message Proposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Proposal message, length delimited. Does not implicitly {@link tendermint.consensus.Proposal.verify|verify} messages.
             * @param message Proposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.Proposal;

            /**
             * Decodes a Proposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.Proposal;

            /**
             * Verifies a Proposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Proposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Proposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.Proposal;

            /**
             * Creates a plain object from a Proposal message. Also converts values to other types if specified.
             * @param message Proposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.Proposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Proposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProposalPOL. */
        interface IProposalPOL {

            /** ProposalPOL height */
            height?: (number|Long|null);

            /** ProposalPOL proposalPolRound */
            proposalPolRound?: (number|null);

            /** ProposalPOL proposalPol */
            proposalPol?: (tendermint.libs.bits.IBitArray|null);
        }

        /** Represents a ProposalPOL. */
        class ProposalPOL implements IProposalPOL {

            /**
             * Constructs a new ProposalPOL.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IProposalPOL);

            /** ProposalPOL height. */
            public height: (number|Long);

            /** ProposalPOL proposalPolRound. */
            public proposalPolRound: number;

            /** ProposalPOL proposalPol. */
            public proposalPol?: (tendermint.libs.bits.IBitArray|null);

            /**
             * Creates a new ProposalPOL instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProposalPOL instance
             */
            public static create(properties?: tendermint.consensus.IProposalPOL): tendermint.consensus.ProposalPOL;

            /**
             * Encodes the specified ProposalPOL message. Does not implicitly {@link tendermint.consensus.ProposalPOL.verify|verify} messages.
             * @param message ProposalPOL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IProposalPOL, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProposalPOL message, length delimited. Does not implicitly {@link tendermint.consensus.ProposalPOL.verify|verify} messages.
             * @param message ProposalPOL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IProposalPOL, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProposalPOL message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProposalPOL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.ProposalPOL;

            /**
             * Decodes a ProposalPOL message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProposalPOL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.ProposalPOL;

            /**
             * Verifies a ProposalPOL message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProposalPOL message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProposalPOL
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.ProposalPOL;

            /**
             * Creates a plain object from a ProposalPOL message. Also converts values to other types if specified.
             * @param message ProposalPOL
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.ProposalPOL, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProposalPOL to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockPart. */
        interface IBlockPart {

            /** BlockPart height */
            height?: (number|Long|null);

            /** BlockPart round */
            round?: (number|null);

            /** BlockPart part */
            part?: (tendermint.types.IPart|null);
        }

        /** Represents a BlockPart. */
        class BlockPart implements IBlockPart {

            /**
             * Constructs a new BlockPart.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IBlockPart);

            /** BlockPart height. */
            public height: (number|Long);

            /** BlockPart round. */
            public round: number;

            /** BlockPart part. */
            public part?: (tendermint.types.IPart|null);

            /**
             * Creates a new BlockPart instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockPart instance
             */
            public static create(properties?: tendermint.consensus.IBlockPart): tendermint.consensus.BlockPart;

            /**
             * Encodes the specified BlockPart message. Does not implicitly {@link tendermint.consensus.BlockPart.verify|verify} messages.
             * @param message BlockPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IBlockPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockPart message, length delimited. Does not implicitly {@link tendermint.consensus.BlockPart.verify|verify} messages.
             * @param message BlockPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IBlockPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockPart message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.BlockPart;

            /**
             * Decodes a BlockPart message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.BlockPart;

            /**
             * Verifies a BlockPart message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockPart message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockPart
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.BlockPart;

            /**
             * Creates a plain object from a BlockPart message. Also converts values to other types if specified.
             * @param message BlockPart
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.BlockPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockPart to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vote. */
        interface IVote {

            /** Vote vote */
            vote?: (tendermint.types.IVote|null);
        }

        /** Represents a Vote. */
        class Vote implements IVote {

            /**
             * Constructs a new Vote.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IVote);

            /** Vote vote. */
            public vote?: (tendermint.types.IVote|null);

            /**
             * Creates a new Vote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vote instance
             */
            public static create(properties?: tendermint.consensus.IVote): tendermint.consensus.Vote;

            /**
             * Encodes the specified Vote message. Does not implicitly {@link tendermint.consensus.Vote.verify|verify} messages.
             * @param message Vote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vote message, length delimited. Does not implicitly {@link tendermint.consensus.Vote.verify|verify} messages.
             * @param message Vote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.Vote;

            /**
             * Decodes a Vote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.Vote;

            /**
             * Verifies a Vote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vote
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.Vote;

            /**
             * Creates a plain object from a Vote message. Also converts values to other types if specified.
             * @param message Vote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.Vote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HasVote. */
        interface IHasVote {

            /** HasVote height */
            height?: (number|Long|null);

            /** HasVote round */
            round?: (number|null);

            /** HasVote type */
            type?: (tendermint.types.SignedMsgType|null);

            /** HasVote index */
            index?: (number|null);
        }

        /** Represents a HasVote. */
        class HasVote implements IHasVote {

            /**
             * Constructs a new HasVote.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IHasVote);

            /** HasVote height. */
            public height: (number|Long);

            /** HasVote round. */
            public round: number;

            /** HasVote type. */
            public type: tendermint.types.SignedMsgType;

            /** HasVote index. */
            public index: number;

            /**
             * Creates a new HasVote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HasVote instance
             */
            public static create(properties?: tendermint.consensus.IHasVote): tendermint.consensus.HasVote;

            /**
             * Encodes the specified HasVote message. Does not implicitly {@link tendermint.consensus.HasVote.verify|verify} messages.
             * @param message HasVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IHasVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HasVote message, length delimited. Does not implicitly {@link tendermint.consensus.HasVote.verify|verify} messages.
             * @param message HasVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IHasVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HasVote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HasVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.HasVote;

            /**
             * Decodes a HasVote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HasVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.HasVote;

            /**
             * Verifies a HasVote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HasVote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HasVote
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.HasVote;

            /**
             * Creates a plain object from a HasVote message. Also converts values to other types if specified.
             * @param message HasVote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.HasVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HasVote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VoteSetMaj23. */
        interface IVoteSetMaj23 {

            /** VoteSetMaj23 height */
            height?: (number|Long|null);

            /** VoteSetMaj23 round */
            round?: (number|null);

            /** VoteSetMaj23 type */
            type?: (tendermint.types.SignedMsgType|null);

            /** VoteSetMaj23 blockId */
            blockId?: (tendermint.types.IBlockID|null);
        }

        /** Represents a VoteSetMaj23. */
        class VoteSetMaj23 implements IVoteSetMaj23 {

            /**
             * Constructs a new VoteSetMaj23.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IVoteSetMaj23);

            /** VoteSetMaj23 height. */
            public height: (number|Long);

            /** VoteSetMaj23 round. */
            public round: number;

            /** VoteSetMaj23 type. */
            public type: tendermint.types.SignedMsgType;

            /** VoteSetMaj23 blockId. */
            public blockId?: (tendermint.types.IBlockID|null);

            /**
             * Creates a new VoteSetMaj23 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VoteSetMaj23 instance
             */
            public static create(properties?: tendermint.consensus.IVoteSetMaj23): tendermint.consensus.VoteSetMaj23;

            /**
             * Encodes the specified VoteSetMaj23 message. Does not implicitly {@link tendermint.consensus.VoteSetMaj23.verify|verify} messages.
             * @param message VoteSetMaj23 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IVoteSetMaj23, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoteSetMaj23 message, length delimited. Does not implicitly {@link tendermint.consensus.VoteSetMaj23.verify|verify} messages.
             * @param message VoteSetMaj23 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IVoteSetMaj23, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoteSetMaj23 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VoteSetMaj23
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.VoteSetMaj23;

            /**
             * Decodes a VoteSetMaj23 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VoteSetMaj23
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.VoteSetMaj23;

            /**
             * Verifies a VoteSetMaj23 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoteSetMaj23 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoteSetMaj23
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.VoteSetMaj23;

            /**
             * Creates a plain object from a VoteSetMaj23 message. Also converts values to other types if specified.
             * @param message VoteSetMaj23
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.VoteSetMaj23, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoteSetMaj23 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VoteSetBits. */
        interface IVoteSetBits {

            /** VoteSetBits height */
            height?: (number|Long|null);

            /** VoteSetBits round */
            round?: (number|null);

            /** VoteSetBits type */
            type?: (tendermint.types.SignedMsgType|null);

            /** VoteSetBits blockId */
            blockId?: (tendermint.types.IBlockID|null);

            /** VoteSetBits votes */
            votes?: (tendermint.libs.bits.IBitArray|null);
        }

        /** Represents a VoteSetBits. */
        class VoteSetBits implements IVoteSetBits {

            /**
             * Constructs a new VoteSetBits.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IVoteSetBits);

            /** VoteSetBits height. */
            public height: (number|Long);

            /** VoteSetBits round. */
            public round: number;

            /** VoteSetBits type. */
            public type: tendermint.types.SignedMsgType;

            /** VoteSetBits blockId. */
            public blockId?: (tendermint.types.IBlockID|null);

            /** VoteSetBits votes. */
            public votes?: (tendermint.libs.bits.IBitArray|null);

            /**
             * Creates a new VoteSetBits instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VoteSetBits instance
             */
            public static create(properties?: tendermint.consensus.IVoteSetBits): tendermint.consensus.VoteSetBits;

            /**
             * Encodes the specified VoteSetBits message. Does not implicitly {@link tendermint.consensus.VoteSetBits.verify|verify} messages.
             * @param message VoteSetBits message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IVoteSetBits, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoteSetBits message, length delimited. Does not implicitly {@link tendermint.consensus.VoteSetBits.verify|verify} messages.
             * @param message VoteSetBits message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IVoteSetBits, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoteSetBits message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VoteSetBits
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.VoteSetBits;

            /**
             * Decodes a VoteSetBits message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VoteSetBits
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.VoteSetBits;

            /**
             * Verifies a VoteSetBits message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoteSetBits message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoteSetBits
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.VoteSetBits;

            /**
             * Creates a plain object from a VoteSetBits message. Also converts values to other types if specified.
             * @param message VoteSetBits
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.VoteSetBits, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoteSetBits to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message newRoundStep */
            newRoundStep?: (tendermint.consensus.INewRoundStep|null);

            /** Message newValidBlock */
            newValidBlock?: (tendermint.consensus.INewValidBlock|null);

            /** Message proposal */
            proposal?: (tendermint.consensus.IProposal|null);

            /** Message proposalPol */
            proposalPol?: (tendermint.consensus.IProposalPOL|null);

            /** Message blockPart */
            blockPart?: (tendermint.consensus.IBlockPart|null);

            /** Message vote */
            vote?: (tendermint.consensus.IVote|null);

            /** Message hasVote */
            hasVote?: (tendermint.consensus.IHasVote|null);

            /** Message voteSetMaj23 */
            voteSetMaj23?: (tendermint.consensus.IVoteSetMaj23|null);

            /** Message voteSetBits */
            voteSetBits?: (tendermint.consensus.IVoteSetBits|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IMessage);

            /** Message newRoundStep. */
            public newRoundStep?: (tendermint.consensus.INewRoundStep|null);

            /** Message newValidBlock. */
            public newValidBlock?: (tendermint.consensus.INewValidBlock|null);

            /** Message proposal. */
            public proposal?: (tendermint.consensus.IProposal|null);

            /** Message proposalPol. */
            public proposalPol?: (tendermint.consensus.IProposalPOL|null);

            /** Message blockPart. */
            public blockPart?: (tendermint.consensus.IBlockPart|null);

            /** Message vote. */
            public vote?: (tendermint.consensus.IVote|null);

            /** Message hasVote. */
            public hasVote?: (tendermint.consensus.IHasVote|null);

            /** Message voteSetMaj23. */
            public voteSetMaj23?: (tendermint.consensus.IVoteSetMaj23|null);

            /** Message voteSetBits. */
            public voteSetBits?: (tendermint.consensus.IVoteSetBits|null);

            /** Message sum. */
            public sum?: ("newRoundStep"|"newValidBlock"|"proposal"|"proposalPol"|"blockPart"|"vote"|"hasVote"|"voteSetMaj23"|"voteSetBits");

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: tendermint.consensus.IMessage): tendermint.consensus.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link tendermint.consensus.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link tendermint.consensus.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgInfo. */
        interface IMsgInfo {

            /** MsgInfo msg */
            msg?: (tendermint.consensus.IMessage|null);

            /** MsgInfo peerId */
            peerId?: (string|null);
        }

        /** Represents a MsgInfo. */
        class MsgInfo implements IMsgInfo {

            /**
             * Constructs a new MsgInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IMsgInfo);

            /** MsgInfo msg. */
            public msg?: (tendermint.consensus.IMessage|null);

            /** MsgInfo peerId. */
            public peerId: string;

            /**
             * Creates a new MsgInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgInfo instance
             */
            public static create(properties?: tendermint.consensus.IMsgInfo): tendermint.consensus.MsgInfo;

            /**
             * Encodes the specified MsgInfo message. Does not implicitly {@link tendermint.consensus.MsgInfo.verify|verify} messages.
             * @param message MsgInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgInfo message, length delimited. Does not implicitly {@link tendermint.consensus.MsgInfo.verify|verify} messages.
             * @param message MsgInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.MsgInfo;

            /**
             * Decodes a MsgInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.MsgInfo;

            /**
             * Verifies a MsgInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.MsgInfo;

            /**
             * Creates a plain object from a MsgInfo message. Also converts values to other types if specified.
             * @param message MsgInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.MsgInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TimeoutInfo. */
        interface ITimeoutInfo {

            /** TimeoutInfo duration */
            duration?: (google.protobuf.IDuration|null);

            /** TimeoutInfo height */
            height?: (number|Long|null);

            /** TimeoutInfo round */
            round?: (number|null);

            /** TimeoutInfo step */
            step?: (number|null);
        }

        /** Represents a TimeoutInfo. */
        class TimeoutInfo implements ITimeoutInfo {

            /**
             * Constructs a new TimeoutInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.ITimeoutInfo);

            /** TimeoutInfo duration. */
            public duration?: (google.protobuf.IDuration|null);

            /** TimeoutInfo height. */
            public height: (number|Long);

            /** TimeoutInfo round. */
            public round: number;

            /** TimeoutInfo step. */
            public step: number;

            /**
             * Creates a new TimeoutInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeoutInfo instance
             */
            public static create(properties?: tendermint.consensus.ITimeoutInfo): tendermint.consensus.TimeoutInfo;

            /**
             * Encodes the specified TimeoutInfo message. Does not implicitly {@link tendermint.consensus.TimeoutInfo.verify|verify} messages.
             * @param message TimeoutInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.ITimeoutInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeoutInfo message, length delimited. Does not implicitly {@link tendermint.consensus.TimeoutInfo.verify|verify} messages.
             * @param message TimeoutInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.ITimeoutInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeoutInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeoutInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.TimeoutInfo;

            /**
             * Decodes a TimeoutInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeoutInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.TimeoutInfo;

            /**
             * Verifies a TimeoutInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeoutInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeoutInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.TimeoutInfo;

            /**
             * Creates a plain object from a TimeoutInfo message. Also converts values to other types if specified.
             * @param message TimeoutInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.TimeoutInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeoutInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EndHeight. */
        interface IEndHeight {

            /** EndHeight height */
            height?: (number|Long|null);
        }

        /** Represents an EndHeight. */
        class EndHeight implements IEndHeight {

            /**
             * Constructs a new EndHeight.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IEndHeight);

            /** EndHeight height. */
            public height: (number|Long);

            /**
             * Creates a new EndHeight instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EndHeight instance
             */
            public static create(properties?: tendermint.consensus.IEndHeight): tendermint.consensus.EndHeight;

            /**
             * Encodes the specified EndHeight message. Does not implicitly {@link tendermint.consensus.EndHeight.verify|verify} messages.
             * @param message EndHeight message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IEndHeight, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EndHeight message, length delimited. Does not implicitly {@link tendermint.consensus.EndHeight.verify|verify} messages.
             * @param message EndHeight message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IEndHeight, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EndHeight message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EndHeight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.EndHeight;

            /**
             * Decodes an EndHeight message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EndHeight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.EndHeight;

            /**
             * Verifies an EndHeight message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EndHeight message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EndHeight
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.EndHeight;

            /**
             * Creates a plain object from an EndHeight message. Also converts values to other types if specified.
             * @param message EndHeight
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.EndHeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EndHeight to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WALMessage. */
        interface IWALMessage {

            /** WALMessage eventDataRoundState */
            eventDataRoundState?: (tendermint.types.IEventDataRoundState|null);

            /** WALMessage msgInfo */
            msgInfo?: (tendermint.consensus.IMsgInfo|null);

            /** WALMessage timeoutInfo */
            timeoutInfo?: (tendermint.consensus.ITimeoutInfo|null);

            /** WALMessage endHeight */
            endHeight?: (tendermint.consensus.IEndHeight|null);
        }

        /** Represents a WALMessage. */
        class WALMessage implements IWALMessage {

            /**
             * Constructs a new WALMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.IWALMessage);

            /** WALMessage eventDataRoundState. */
            public eventDataRoundState?: (tendermint.types.IEventDataRoundState|null);

            /** WALMessage msgInfo. */
            public msgInfo?: (tendermint.consensus.IMsgInfo|null);

            /** WALMessage timeoutInfo. */
            public timeoutInfo?: (tendermint.consensus.ITimeoutInfo|null);

            /** WALMessage endHeight. */
            public endHeight?: (tendermint.consensus.IEndHeight|null);

            /** WALMessage sum. */
            public sum?: ("eventDataRoundState"|"msgInfo"|"timeoutInfo"|"endHeight");

            /**
             * Creates a new WALMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WALMessage instance
             */
            public static create(properties?: tendermint.consensus.IWALMessage): tendermint.consensus.WALMessage;

            /**
             * Encodes the specified WALMessage message. Does not implicitly {@link tendermint.consensus.WALMessage.verify|verify} messages.
             * @param message WALMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.IWALMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WALMessage message, length delimited. Does not implicitly {@link tendermint.consensus.WALMessage.verify|verify} messages.
             * @param message WALMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.IWALMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WALMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WALMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.WALMessage;

            /**
             * Decodes a WALMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WALMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.WALMessage;

            /**
             * Verifies a WALMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WALMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WALMessage
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.WALMessage;

            /**
             * Creates a plain object from a WALMessage message. Also converts values to other types if specified.
             * @param message WALMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.WALMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WALMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TimedWALMessage. */
        interface ITimedWALMessage {

            /** TimedWALMessage time */
            time?: (google.protobuf.ITimestamp|null);

            /** TimedWALMessage msg */
            msg?: (tendermint.consensus.IWALMessage|null);
        }

        /** Represents a TimedWALMessage. */
        class TimedWALMessage implements ITimedWALMessage {

            /**
             * Constructs a new TimedWALMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.consensus.ITimedWALMessage);

            /** TimedWALMessage time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** TimedWALMessage msg. */
            public msg?: (tendermint.consensus.IWALMessage|null);

            /**
             * Creates a new TimedWALMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimedWALMessage instance
             */
            public static create(properties?: tendermint.consensus.ITimedWALMessage): tendermint.consensus.TimedWALMessage;

            /**
             * Encodes the specified TimedWALMessage message. Does not implicitly {@link tendermint.consensus.TimedWALMessage.verify|verify} messages.
             * @param message TimedWALMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.consensus.ITimedWALMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimedWALMessage message, length delimited. Does not implicitly {@link tendermint.consensus.TimedWALMessage.verify|verify} messages.
             * @param message TimedWALMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.consensus.ITimedWALMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimedWALMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimedWALMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.consensus.TimedWALMessage;

            /**
             * Decodes a TimedWALMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimedWALMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.consensus.TimedWALMessage;

            /**
             * Verifies a TimedWALMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimedWALMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimedWALMessage
             */
            public static fromObject(object: { [k: string]: any }): tendermint.consensus.TimedWALMessage;

            /**
             * Creates a plain object from a TimedWALMessage message. Also converts values to other types if specified.
             * @param message TimedWALMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.consensus.TimedWALMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimedWALMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace crypto. */
    namespace crypto {

        /** Properties of a PublicKey. */
        interface IPublicKey {

            /** PublicKey ed25519 */
            ed25519?: (Uint8Array|null);

            /** PublicKey secp256k1 */
            secp256k1?: (Uint8Array|null);
        }

        /** Represents a PublicKey. */
        class PublicKey implements IPublicKey {

            /**
             * Constructs a new PublicKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IPublicKey);

            /** PublicKey ed25519. */
            public ed25519?: (Uint8Array|null);

            /** PublicKey secp256k1. */
            public secp256k1?: (Uint8Array|null);

            /** PublicKey sum. */
            public sum?: ("ed25519"|"secp256k1");

            /**
             * Creates a new PublicKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PublicKey instance
             */
            public static create(properties?: tendermint.crypto.IPublicKey): tendermint.crypto.PublicKey;

            /**
             * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @param message PublicKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @param message PublicKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PublicKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.PublicKey;

            /**
             * Decodes a PublicKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.PublicKey;

            /**
             * Verifies a PublicKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PublicKey
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.PublicKey;

            /**
             * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
             * @param message PublicKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.PublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PublicKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Proof. */
        interface IProof {

            /** Proof total */
            total?: (number|Long|null);

            /** Proof index */
            index?: (number|Long|null);

            /** Proof leafHash */
            leafHash?: (Uint8Array|null);

            /** Proof aunts */
            aunts?: (Uint8Array[]|null);
        }

        /** Represents a Proof. */
        class Proof implements IProof {

            /**
             * Constructs a new Proof.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProof);

            /** Proof total. */
            public total: (number|Long);

            /** Proof index. */
            public index: (number|Long);

            /** Proof leafHash. */
            public leafHash: Uint8Array;

            /** Proof aunts. */
            public aunts: Uint8Array[];

            /**
             * Creates a new Proof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Proof instance
             */
            public static create(properties?: tendermint.crypto.IProof): tendermint.crypto.Proof;

            /**
             * Encodes the specified Proof message. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @param message Proof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Proof message, length delimited. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @param message Proof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.Proof;

            /**
             * Decodes a Proof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.Proof;

            /**
             * Verifies a Proof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Proof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Proof
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.Proof;

            /**
             * Creates a plain object from a Proof message. Also converts values to other types if specified.
             * @param message Proof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.Proof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Proof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValueOp. */
        interface IValueOp {

            /** ValueOp key */
            key?: (Uint8Array|null);

            /** ValueOp proof */
            proof?: (tendermint.crypto.IProof|null);
        }

        /** Represents a ValueOp. */
        class ValueOp implements IValueOp {

            /**
             * Constructs a new ValueOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IValueOp);

            /** ValueOp key. */
            public key: Uint8Array;

            /** ValueOp proof. */
            public proof?: (tendermint.crypto.IProof|null);

            /**
             * Creates a new ValueOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValueOp instance
             */
            public static create(properties?: tendermint.crypto.IValueOp): tendermint.crypto.ValueOp;

            /**
             * Encodes the specified ValueOp message. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @param message ValueOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IValueOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValueOp message, length delimited. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @param message ValueOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IValueOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValueOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ValueOp;

            /**
             * Decodes a ValueOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ValueOp;

            /**
             * Verifies a ValueOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValueOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValueOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ValueOp;

            /**
             * Creates a plain object from a ValueOp message. Also converts values to other types if specified.
             * @param message ValueOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ValueOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValueOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DominoOp. */
        interface IDominoOp {

            /** DominoOp key */
            key?: (string|null);

            /** DominoOp input */
            input?: (string|null);

            /** DominoOp output */
            output?: (string|null);
        }

        /** Represents a DominoOp. */
        class DominoOp implements IDominoOp {

            /**
             * Constructs a new DominoOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IDominoOp);

            /** DominoOp key. */
            public key: string;

            /** DominoOp input. */
            public input: string;

            /** DominoOp output. */
            public output: string;

            /**
             * Creates a new DominoOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DominoOp instance
             */
            public static create(properties?: tendermint.crypto.IDominoOp): tendermint.crypto.DominoOp;

            /**
             * Encodes the specified DominoOp message. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @param message DominoOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IDominoOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DominoOp message, length delimited. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @param message DominoOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IDominoOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DominoOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.DominoOp;

            /**
             * Decodes a DominoOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.DominoOp;

            /**
             * Verifies a DominoOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DominoOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DominoOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.DominoOp;

            /**
             * Creates a plain object from a DominoOp message. Also converts values to other types if specified.
             * @param message DominoOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.DominoOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DominoOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProofOp. */
        interface IProofOp {

            /** ProofOp type */
            type?: (string|null);

            /** ProofOp key */
            key?: (Uint8Array|null);

            /** ProofOp data */
            data?: (Uint8Array|null);
        }

        /** Represents a ProofOp. */
        class ProofOp implements IProofOp {

            /**
             * Constructs a new ProofOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProofOp);

            /** ProofOp type. */
            public type: string;

            /** ProofOp key. */
            public key: Uint8Array;

            /** ProofOp data. */
            public data: Uint8Array;

            /**
             * Creates a new ProofOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProofOp instance
             */
            public static create(properties?: tendermint.crypto.IProofOp): tendermint.crypto.ProofOp;

            /**
             * Encodes the specified ProofOp message. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @param message ProofOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProofOp message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @param message ProofOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ProofOp;

            /**
             * Decodes a ProofOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ProofOp;

            /**
             * Verifies a ProofOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProofOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProofOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ProofOp;

            /**
             * Creates a plain object from a ProofOp message. Also converts values to other types if specified.
             * @param message ProofOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ProofOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProofOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProofOps. */
        interface IProofOps {

            /** ProofOps ops */
            ops?: (tendermint.crypto.IProofOp[]|null);
        }

        /** Represents a ProofOps. */
        class ProofOps implements IProofOps {

            /**
             * Constructs a new ProofOps.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProofOps);

            /** ProofOps ops. */
            public ops: tendermint.crypto.IProofOp[];

            /**
             * Creates a new ProofOps instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProofOps instance
             */
            public static create(properties?: tendermint.crypto.IProofOps): tendermint.crypto.ProofOps;

            /**
             * Encodes the specified ProofOps message. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @param message ProofOps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProofOps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProofOps message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @param message ProofOps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProofOps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOps message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ProofOps;

            /**
             * Decodes a ProofOps message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ProofOps;

            /**
             * Verifies a ProofOps message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProofOps message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProofOps
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ProofOps;

            /**
             * Creates a plain object from a ProofOps message. Also converts values to other types if specified.
             * @param message ProofOps
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ProofOps, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProofOps to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Namespace merkle. */
        namespace merkle {

            /** Properties of a ProofOp. */
            interface IProofOp {

                /** ProofOp type */
                type?: (string|null);

                /** ProofOp key */
                key?: (Uint8Array|null);

                /** ProofOp data */
                data?: (Uint8Array|null);
            }

            /** Represents a ProofOp. */
            class ProofOp implements IProofOp {

                /**
                 * Constructs a new ProofOp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.crypto.merkle.IProofOp);

                /** ProofOp type. */
                public type: string;

                /** ProofOp key. */
                public key: Uint8Array;

                /** ProofOp data. */
                public data: Uint8Array;

                /**
                 * Creates a new ProofOp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProofOp instance
                 */
                public static create(properties?: tendermint.crypto.merkle.IProofOp): tendermint.crypto.merkle.ProofOp;

                /**
                 * Encodes the specified ProofOp message. Does not implicitly {@link tendermint.crypto.merkle.ProofOp.verify|verify} messages.
                 * @param message ProofOp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.crypto.merkle.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProofOp message, length delimited. Does not implicitly {@link tendermint.crypto.merkle.ProofOp.verify|verify} messages.
                 * @param message ProofOp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.crypto.merkle.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProofOp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProofOp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.merkle.ProofOp;

                /**
                 * Decodes a ProofOp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProofOp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.merkle.ProofOp;

                /**
                 * Verifies a ProofOp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProofOp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProofOp
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.crypto.merkle.ProofOp;

                /**
                 * Creates a plain object from a ProofOp message. Also converts values to other types if specified.
                 * @param message ProofOp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.crypto.merkle.ProofOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProofOp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Proof. */
            interface IProof {

                /** Proof ops */
                ops?: (tendermint.crypto.merkle.IProofOp[]|null);
            }

            /** Represents a Proof. */
            class Proof implements IProof {

                /**
                 * Constructs a new Proof.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.crypto.merkle.IProof);

                /** Proof ops. */
                public ops: tendermint.crypto.merkle.IProofOp[];

                /**
                 * Creates a new Proof instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Proof instance
                 */
                public static create(properties?: tendermint.crypto.merkle.IProof): tendermint.crypto.merkle.Proof;

                /**
                 * Encodes the specified Proof message. Does not implicitly {@link tendermint.crypto.merkle.Proof.verify|verify} messages.
                 * @param message Proof message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.crypto.merkle.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Proof message, length delimited. Does not implicitly {@link tendermint.crypto.merkle.Proof.verify|verify} messages.
                 * @param message Proof message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.crypto.merkle.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Proof message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Proof
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.merkle.Proof;

                /**
                 * Decodes a Proof message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Proof
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.merkle.Proof;

                /**
                 * Verifies a Proof message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Proof message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Proof
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.crypto.merkle.Proof;

                /**
                 * Creates a plain object from a Proof message. Also converts values to other types if specified.
                 * @param message Proof
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.crypto.merkle.Proof, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Proof to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace libs. */
    namespace libs {

        /** Namespace bits. */
        namespace bits {

            /** Properties of a BitArray. */
            interface IBitArray {

                /** BitArray bits */
                bits?: (number|Long|null);

                /** BitArray elems */
                elems?: ((number|Long)[]|null);
            }

            /** Represents a BitArray. */
            class BitArray implements IBitArray {

                /**
                 * Constructs a new BitArray.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.libs.bits.IBitArray);

                /** BitArray bits. */
                public bits: (number|Long);

                /** BitArray elems. */
                public elems: (number|Long)[];

                /**
                 * Creates a new BitArray instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BitArray instance
                 */
                public static create(properties?: tendermint.libs.bits.IBitArray): tendermint.libs.bits.BitArray;

                /**
                 * Encodes the specified BitArray message. Does not implicitly {@link tendermint.libs.bits.BitArray.verify|verify} messages.
                 * @param message BitArray message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.libs.bits.IBitArray, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BitArray message, length delimited. Does not implicitly {@link tendermint.libs.bits.BitArray.verify|verify} messages.
                 * @param message BitArray message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.libs.bits.IBitArray, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BitArray message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BitArray
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.libs.bits.BitArray;

                /**
                 * Decodes a BitArray message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BitArray
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.libs.bits.BitArray;

                /**
                 * Verifies a BitArray message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BitArray message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BitArray
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.libs.bits.BitArray;

                /**
                 * Creates a plain object from a BitArray message. Also converts values to other types if specified.
                 * @param message BitArray
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.libs.bits.BitArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BitArray to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace kv. */
        namespace kv {

            /** Properties of a Pair. */
            interface IPair {

                /** Pair key */
                key?: (Uint8Array|null);

                /** Pair value */
                value?: (Uint8Array|null);
            }

            /** Represents a Pair. */
            class Pair implements IPair {

                /**
                 * Constructs a new Pair.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.libs.kv.IPair);

                /** Pair key. */
                public key: Uint8Array;

                /** Pair value. */
                public value: Uint8Array;

                /**
                 * Creates a new Pair instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Pair instance
                 */
                public static create(properties?: tendermint.libs.kv.IPair): tendermint.libs.kv.Pair;

                /**
                 * Encodes the specified Pair message. Does not implicitly {@link tendermint.libs.kv.Pair.verify|verify} messages.
                 * @param message Pair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.libs.kv.IPair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Pair message, length delimited. Does not implicitly {@link tendermint.libs.kv.Pair.verify|verify} messages.
                 * @param message Pair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.libs.kv.IPair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Pair message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Pair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.libs.kv.Pair;

                /**
                 * Decodes a Pair message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Pair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.libs.kv.Pair;

                /**
                 * Verifies a Pair message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Pair message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Pair
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.libs.kv.Pair;

                /**
                 * Creates a plain object from a Pair message. Also converts values to other types if specified.
                 * @param message Pair
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.libs.kv.Pair, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Pair to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a KI64Pair. */
            interface IKI64Pair {

                /** KI64Pair key */
                key?: (Uint8Array|null);

                /** KI64Pair value */
                value?: (number|Long|null);
            }

            /** Represents a KI64Pair. */
            class KI64Pair implements IKI64Pair {

                /**
                 * Constructs a new KI64Pair.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.libs.kv.IKI64Pair);

                /** KI64Pair key. */
                public key: Uint8Array;

                /** KI64Pair value. */
                public value: (number|Long);

                /**
                 * Creates a new KI64Pair instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KI64Pair instance
                 */
                public static create(properties?: tendermint.libs.kv.IKI64Pair): tendermint.libs.kv.KI64Pair;

                /**
                 * Encodes the specified KI64Pair message. Does not implicitly {@link tendermint.libs.kv.KI64Pair.verify|verify} messages.
                 * @param message KI64Pair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.libs.kv.IKI64Pair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KI64Pair message, length delimited. Does not implicitly {@link tendermint.libs.kv.KI64Pair.verify|verify} messages.
                 * @param message KI64Pair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.libs.kv.IKI64Pair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KI64Pair message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KI64Pair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.libs.kv.KI64Pair;

                /**
                 * Decodes a KI64Pair message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KI64Pair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.libs.kv.KI64Pair;

                /**
                 * Verifies a KI64Pair message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KI64Pair message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KI64Pair
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.libs.kv.KI64Pair;

                /**
                 * Creates a plain object from a KI64Pair message. Also converts values to other types if specified.
                 * @param message KI64Pair
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.libs.kv.KI64Pair, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KI64Pair to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace mempool. */
    namespace mempool {

        /** Properties of a Txs. */
        interface ITxs {

            /** Txs txs */
            txs?: (Uint8Array[]|null);
        }

        /** Represents a Txs. */
        class Txs implements ITxs {

            /**
             * Constructs a new Txs.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.mempool.ITxs);

            /** Txs txs. */
            public txs: Uint8Array[];

            /**
             * Creates a new Txs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Txs instance
             */
            public static create(properties?: tendermint.mempool.ITxs): tendermint.mempool.Txs;

            /**
             * Encodes the specified Txs message. Does not implicitly {@link tendermint.mempool.Txs.verify|verify} messages.
             * @param message Txs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.mempool.ITxs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Txs message, length delimited. Does not implicitly {@link tendermint.mempool.Txs.verify|verify} messages.
             * @param message Txs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.mempool.ITxs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Txs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Txs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.mempool.Txs;

            /**
             * Decodes a Txs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Txs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.mempool.Txs;

            /**
             * Verifies a Txs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Txs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Txs
             */
            public static fromObject(object: { [k: string]: any }): tendermint.mempool.Txs;

            /**
             * Creates a plain object from a Txs message. Also converts values to other types if specified.
             * @param message Txs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.mempool.Txs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Txs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message txs */
            txs?: (tendermint.mempool.ITxs|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.mempool.IMessage);

            /** Message txs. */
            public txs?: (tendermint.mempool.ITxs|null);

            /** Message sum. */
            public sum?: "txs";

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: tendermint.mempool.IMessage): tendermint.mempool.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link tendermint.mempool.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.mempool.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link tendermint.mempool.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.mempool.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.mempool.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.mempool.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): tendermint.mempool.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.mempool.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace p2p. */
    namespace p2p {

        /** Properties of a PacketPing. */
        interface IPacketPing {
        }

        /** Represents a PacketPing. */
        class PacketPing implements IPacketPing {

            /**
             * Constructs a new PacketPing.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IPacketPing);

            /**
             * Creates a new PacketPing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PacketPing instance
             */
            public static create(properties?: tendermint.p2p.IPacketPing): tendermint.p2p.PacketPing;

            /**
             * Encodes the specified PacketPing message. Does not implicitly {@link tendermint.p2p.PacketPing.verify|verify} messages.
             * @param message PacketPing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IPacketPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PacketPing message, length delimited. Does not implicitly {@link tendermint.p2p.PacketPing.verify|verify} messages.
             * @param message PacketPing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IPacketPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PacketPing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PacketPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.PacketPing;

            /**
             * Decodes a PacketPing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PacketPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.PacketPing;

            /**
             * Verifies a PacketPing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PacketPing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PacketPing
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.PacketPing;

            /**
             * Creates a plain object from a PacketPing message. Also converts values to other types if specified.
             * @param message PacketPing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.PacketPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PacketPing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PacketPong. */
        interface IPacketPong {
        }

        /** Represents a PacketPong. */
        class PacketPong implements IPacketPong {

            /**
             * Constructs a new PacketPong.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IPacketPong);

            /**
             * Creates a new PacketPong instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PacketPong instance
             */
            public static create(properties?: tendermint.p2p.IPacketPong): tendermint.p2p.PacketPong;

            /**
             * Encodes the specified PacketPong message. Does not implicitly {@link tendermint.p2p.PacketPong.verify|verify} messages.
             * @param message PacketPong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IPacketPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PacketPong message, length delimited. Does not implicitly {@link tendermint.p2p.PacketPong.verify|verify} messages.
             * @param message PacketPong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IPacketPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PacketPong message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PacketPong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.PacketPong;

            /**
             * Decodes a PacketPong message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PacketPong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.PacketPong;

            /**
             * Verifies a PacketPong message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PacketPong message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PacketPong
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.PacketPong;

            /**
             * Creates a plain object from a PacketPong message. Also converts values to other types if specified.
             * @param message PacketPong
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.PacketPong, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PacketPong to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PacketMsg. */
        interface IPacketMsg {

            /** PacketMsg channelId */
            channelId?: (number|null);

            /** PacketMsg eof */
            eof?: (boolean|null);

            /** PacketMsg data */
            data?: (Uint8Array|null);
        }

        /** Represents a PacketMsg. */
        class PacketMsg implements IPacketMsg {

            /**
             * Constructs a new PacketMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IPacketMsg);

            /** PacketMsg channelId. */
            public channelId: number;

            /** PacketMsg eof. */
            public eof: boolean;

            /** PacketMsg data. */
            public data: Uint8Array;

            /**
             * Creates a new PacketMsg instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PacketMsg instance
             */
            public static create(properties?: tendermint.p2p.IPacketMsg): tendermint.p2p.PacketMsg;

            /**
             * Encodes the specified PacketMsg message. Does not implicitly {@link tendermint.p2p.PacketMsg.verify|verify} messages.
             * @param message PacketMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IPacketMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PacketMsg message, length delimited. Does not implicitly {@link tendermint.p2p.PacketMsg.verify|verify} messages.
             * @param message PacketMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IPacketMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PacketMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PacketMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.PacketMsg;

            /**
             * Decodes a PacketMsg message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PacketMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.PacketMsg;

            /**
             * Verifies a PacketMsg message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PacketMsg message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PacketMsg
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.PacketMsg;

            /**
             * Creates a plain object from a PacketMsg message. Also converts values to other types if specified.
             * @param message PacketMsg
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.PacketMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PacketMsg to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Packet. */
        interface IPacket {

            /** Packet packetPing */
            packetPing?: (tendermint.p2p.IPacketPing|null);

            /** Packet packetPong */
            packetPong?: (tendermint.p2p.IPacketPong|null);

            /** Packet packetMsg */
            packetMsg?: (tendermint.p2p.IPacketMsg|null);
        }

        /** Represents a Packet. */
        class Packet implements IPacket {

            /**
             * Constructs a new Packet.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IPacket);

            /** Packet packetPing. */
            public packetPing?: (tendermint.p2p.IPacketPing|null);

            /** Packet packetPong. */
            public packetPong?: (tendermint.p2p.IPacketPong|null);

            /** Packet packetMsg. */
            public packetMsg?: (tendermint.p2p.IPacketMsg|null);

            /** Packet sum. */
            public sum?: ("packetPing"|"packetPong"|"packetMsg");

            /**
             * Creates a new Packet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Packet instance
             */
            public static create(properties?: tendermint.p2p.IPacket): tendermint.p2p.Packet;

            /**
             * Encodes the specified Packet message. Does not implicitly {@link tendermint.p2p.Packet.verify|verify} messages.
             * @param message Packet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Packet message, length delimited. Does not implicitly {@link tendermint.p2p.Packet.verify|verify} messages.
             * @param message Packet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Packet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.Packet;

            /**
             * Decodes a Packet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.Packet;

            /**
             * Verifies a Packet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Packet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Packet
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.Packet;

            /**
             * Creates a plain object from a Packet message. Also converts values to other types if specified.
             * @param message Packet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Packet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AuthSigMessage. */
        interface IAuthSigMessage {

            /** AuthSigMessage pubKey */
            pubKey?: (tendermint.crypto.IPublicKey|null);

            /** AuthSigMessage sig */
            sig?: (Uint8Array|null);
        }

        /** Represents an AuthSigMessage. */
        class AuthSigMessage implements IAuthSigMessage {

            /**
             * Constructs a new AuthSigMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IAuthSigMessage);

            /** AuthSigMessage pubKey. */
            public pubKey?: (tendermint.crypto.IPublicKey|null);

            /** AuthSigMessage sig. */
            public sig: Uint8Array;

            /**
             * Creates a new AuthSigMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthSigMessage instance
             */
            public static create(properties?: tendermint.p2p.IAuthSigMessage): tendermint.p2p.AuthSigMessage;

            /**
             * Encodes the specified AuthSigMessage message. Does not implicitly {@link tendermint.p2p.AuthSigMessage.verify|verify} messages.
             * @param message AuthSigMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IAuthSigMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthSigMessage message, length delimited. Does not implicitly {@link tendermint.p2p.AuthSigMessage.verify|verify} messages.
             * @param message AuthSigMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IAuthSigMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthSigMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthSigMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.AuthSigMessage;

            /**
             * Decodes an AuthSigMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthSigMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.AuthSigMessage;

            /**
             * Verifies an AuthSigMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthSigMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthSigMessage
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.AuthSigMessage;

            /**
             * Creates a plain object from an AuthSigMessage message. Also converts values to other types if specified.
             * @param message AuthSigMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.AuthSigMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthSigMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PexRequest. */
        interface IPexRequest {
        }

        /** Represents a PexRequest. */
        class PexRequest implements IPexRequest {

            /**
             * Constructs a new PexRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IPexRequest);

            /**
             * Creates a new PexRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PexRequest instance
             */
            public static create(properties?: tendermint.p2p.IPexRequest): tendermint.p2p.PexRequest;

            /**
             * Encodes the specified PexRequest message. Does not implicitly {@link tendermint.p2p.PexRequest.verify|verify} messages.
             * @param message PexRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IPexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PexRequest message, length delimited. Does not implicitly {@link tendermint.p2p.PexRequest.verify|verify} messages.
             * @param message PexRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IPexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PexRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.PexRequest;

            /**
             * Decodes a PexRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.PexRequest;

            /**
             * Verifies a PexRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PexRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PexRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.PexRequest;

            /**
             * Creates a plain object from a PexRequest message. Also converts values to other types if specified.
             * @param message PexRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.PexRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PexRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PexAddrs. */
        interface IPexAddrs {

            /** PexAddrs addrs */
            addrs?: (tendermint.p2p.INetAddress[]|null);
        }

        /** Represents a PexAddrs. */
        class PexAddrs implements IPexAddrs {

            /**
             * Constructs a new PexAddrs.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IPexAddrs);

            /** PexAddrs addrs. */
            public addrs: tendermint.p2p.INetAddress[];

            /**
             * Creates a new PexAddrs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PexAddrs instance
             */
            public static create(properties?: tendermint.p2p.IPexAddrs): tendermint.p2p.PexAddrs;

            /**
             * Encodes the specified PexAddrs message. Does not implicitly {@link tendermint.p2p.PexAddrs.verify|verify} messages.
             * @param message PexAddrs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IPexAddrs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PexAddrs message, length delimited. Does not implicitly {@link tendermint.p2p.PexAddrs.verify|verify} messages.
             * @param message PexAddrs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IPexAddrs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PexAddrs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PexAddrs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.PexAddrs;

            /**
             * Decodes a PexAddrs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PexAddrs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.PexAddrs;

            /**
             * Verifies a PexAddrs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PexAddrs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PexAddrs
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.PexAddrs;

            /**
             * Creates a plain object from a PexAddrs message. Also converts values to other types if specified.
             * @param message PexAddrs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.PexAddrs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PexAddrs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message pexRequest */
            pexRequest?: (tendermint.p2p.IPexRequest|null);

            /** Message pexAddrs */
            pexAddrs?: (tendermint.p2p.IPexAddrs|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IMessage);

            /** Message pexRequest. */
            public pexRequest?: (tendermint.p2p.IPexRequest|null);

            /** Message pexAddrs. */
            public pexAddrs?: (tendermint.p2p.IPexAddrs|null);

            /** Message sum. */
            public sum?: ("pexRequest"|"pexAddrs");

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: tendermint.p2p.IMessage): tendermint.p2p.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link tendermint.p2p.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link tendermint.p2p.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NetAddress. */
        interface INetAddress {

            /** NetAddress id */
            id?: (string|null);

            /** NetAddress ip */
            ip?: (string|null);

            /** NetAddress port */
            port?: (number|null);
        }

        /** Represents a NetAddress. */
        class NetAddress implements INetAddress {

            /**
             * Constructs a new NetAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.INetAddress);

            /** NetAddress id. */
            public id: string;

            /** NetAddress ip. */
            public ip: string;

            /** NetAddress port. */
            public port: number;

            /**
             * Creates a new NetAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetAddress instance
             */
            public static create(properties?: tendermint.p2p.INetAddress): tendermint.p2p.NetAddress;

            /**
             * Encodes the specified NetAddress message. Does not implicitly {@link tendermint.p2p.NetAddress.verify|verify} messages.
             * @param message NetAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.INetAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NetAddress message, length delimited. Does not implicitly {@link tendermint.p2p.NetAddress.verify|verify} messages.
             * @param message NetAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.INetAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.NetAddress;

            /**
             * Decodes a NetAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NetAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.NetAddress;

            /**
             * Verifies a NetAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NetAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NetAddress
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.NetAddress;

            /**
             * Creates a plain object from a NetAddress message. Also converts values to other types if specified.
             * @param message NetAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.NetAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NetAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtocolVersion. */
        interface IProtocolVersion {

            /** ProtocolVersion p2p */
            p2p?: (number|Long|null);

            /** ProtocolVersion block */
            block?: (number|Long|null);

            /** ProtocolVersion app */
            app?: (number|Long|null);
        }

        /** Represents a ProtocolVersion. */
        class ProtocolVersion implements IProtocolVersion {

            /**
             * Constructs a new ProtocolVersion.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IProtocolVersion);

            /** ProtocolVersion p2p. */
            public p2p: (number|Long);

            /** ProtocolVersion block. */
            public block: (number|Long);

            /** ProtocolVersion app. */
            public app: (number|Long);

            /**
             * Creates a new ProtocolVersion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtocolVersion instance
             */
            public static create(properties?: tendermint.p2p.IProtocolVersion): tendermint.p2p.ProtocolVersion;

            /**
             * Encodes the specified ProtocolVersion message. Does not implicitly {@link tendermint.p2p.ProtocolVersion.verify|verify} messages.
             * @param message ProtocolVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IProtocolVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtocolVersion message, length delimited. Does not implicitly {@link tendermint.p2p.ProtocolVersion.verify|verify} messages.
             * @param message ProtocolVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IProtocolVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtocolVersion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtocolVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.ProtocolVersion;

            /**
             * Decodes a ProtocolVersion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtocolVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.ProtocolVersion;

            /**
             * Verifies a ProtocolVersion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtocolVersion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtocolVersion
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.ProtocolVersion;

            /**
             * Creates a plain object from a ProtocolVersion message. Also converts values to other types if specified.
             * @param message ProtocolVersion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.ProtocolVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtocolVersion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DefaultNodeInfo. */
        interface IDefaultNodeInfo {

            /** DefaultNodeInfo protocolVersion */
            protocolVersion?: (tendermint.p2p.IProtocolVersion|null);

            /** DefaultNodeInfo defaultNodeId */
            defaultNodeId?: (string|null);

            /** DefaultNodeInfo listenAddr */
            listenAddr?: (string|null);

            /** DefaultNodeInfo network */
            network?: (string|null);

            /** DefaultNodeInfo version */
            version?: (string|null);

            /** DefaultNodeInfo channels */
            channels?: (Uint8Array|null);

            /** DefaultNodeInfo moniker */
            moniker?: (string|null);

            /** DefaultNodeInfo other */
            other?: (tendermint.p2p.IDefaultNodeInfoOther|null);
        }

        /** Represents a DefaultNodeInfo. */
        class DefaultNodeInfo implements IDefaultNodeInfo {

            /**
             * Constructs a new DefaultNodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IDefaultNodeInfo);

            /** DefaultNodeInfo protocolVersion. */
            public protocolVersion?: (tendermint.p2p.IProtocolVersion|null);

            /** DefaultNodeInfo defaultNodeId. */
            public defaultNodeId: string;

            /** DefaultNodeInfo listenAddr. */
            public listenAddr: string;

            /** DefaultNodeInfo network. */
            public network: string;

            /** DefaultNodeInfo version. */
            public version: string;

            /** DefaultNodeInfo channels. */
            public channels: Uint8Array;

            /** DefaultNodeInfo moniker. */
            public moniker: string;

            /** DefaultNodeInfo other. */
            public other?: (tendermint.p2p.IDefaultNodeInfoOther|null);

            /**
             * Creates a new DefaultNodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DefaultNodeInfo instance
             */
            public static create(properties?: tendermint.p2p.IDefaultNodeInfo): tendermint.p2p.DefaultNodeInfo;

            /**
             * Encodes the specified DefaultNodeInfo message. Does not implicitly {@link tendermint.p2p.DefaultNodeInfo.verify|verify} messages.
             * @param message DefaultNodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IDefaultNodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DefaultNodeInfo message, length delimited. Does not implicitly {@link tendermint.p2p.DefaultNodeInfo.verify|verify} messages.
             * @param message DefaultNodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IDefaultNodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DefaultNodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DefaultNodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.DefaultNodeInfo;

            /**
             * Decodes a DefaultNodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DefaultNodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.DefaultNodeInfo;

            /**
             * Verifies a DefaultNodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DefaultNodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DefaultNodeInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.DefaultNodeInfo;

            /**
             * Creates a plain object from a DefaultNodeInfo message. Also converts values to other types if specified.
             * @param message DefaultNodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.DefaultNodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DefaultNodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DefaultNodeInfoOther. */
        interface IDefaultNodeInfoOther {

            /** DefaultNodeInfoOther txIndex */
            txIndex?: (string|null);

            /** DefaultNodeInfoOther rpcAddress */
            rpcAddress?: (string|null);
        }

        /** Represents a DefaultNodeInfoOther. */
        class DefaultNodeInfoOther implements IDefaultNodeInfoOther {

            /**
             * Constructs a new DefaultNodeInfoOther.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.p2p.IDefaultNodeInfoOther);

            /** DefaultNodeInfoOther txIndex. */
            public txIndex: string;

            /** DefaultNodeInfoOther rpcAddress. */
            public rpcAddress: string;

            /**
             * Creates a new DefaultNodeInfoOther instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DefaultNodeInfoOther instance
             */
            public static create(properties?: tendermint.p2p.IDefaultNodeInfoOther): tendermint.p2p.DefaultNodeInfoOther;

            /**
             * Encodes the specified DefaultNodeInfoOther message. Does not implicitly {@link tendermint.p2p.DefaultNodeInfoOther.verify|verify} messages.
             * @param message DefaultNodeInfoOther message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.p2p.IDefaultNodeInfoOther, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DefaultNodeInfoOther message, length delimited. Does not implicitly {@link tendermint.p2p.DefaultNodeInfoOther.verify|verify} messages.
             * @param message DefaultNodeInfoOther message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.p2p.IDefaultNodeInfoOther, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DefaultNodeInfoOther message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DefaultNodeInfoOther
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.p2p.DefaultNodeInfoOther;

            /**
             * Decodes a DefaultNodeInfoOther message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DefaultNodeInfoOther
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.p2p.DefaultNodeInfoOther;

            /**
             * Verifies a DefaultNodeInfoOther message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DefaultNodeInfoOther message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DefaultNodeInfoOther
             */
            public static fromObject(object: { [k: string]: any }): tendermint.p2p.DefaultNodeInfoOther;

            /**
             * Creates a plain object from a DefaultNodeInfoOther message. Also converts values to other types if specified.
             * @param message DefaultNodeInfoOther
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.p2p.DefaultNodeInfoOther, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DefaultNodeInfoOther to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace privval. */
    namespace privval {

        /** Represents a PrivValidatorAPI */
        class PrivValidatorAPI extends $protobuf.rpc.Service {

            /**
             * Constructs a new PrivValidatorAPI service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new PrivValidatorAPI service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PrivValidatorAPI;

            /**
             * Calls GetPubKey.
             * @param request PubKeyRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and PubKeyResponse
             */
            public getPubKey(request: tendermint.privval.IPubKeyRequest, callback: tendermint.privval.PrivValidatorAPI.GetPubKeyCallback): void;

            /**
             * Calls GetPubKey.
             * @param request PubKeyRequest message or plain object
             * @returns Promise
             */
            public getPubKey(request: tendermint.privval.IPubKeyRequest): Promise<tendermint.privval.PubKeyResponse>;

            /**
             * Calls SignVote.
             * @param request SignVoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SignedVoteResponse
             */
            public signVote(request: tendermint.privval.ISignVoteRequest, callback: tendermint.privval.PrivValidatorAPI.SignVoteCallback): void;

            /**
             * Calls SignVote.
             * @param request SignVoteRequest message or plain object
             * @returns Promise
             */
            public signVote(request: tendermint.privval.ISignVoteRequest): Promise<tendermint.privval.SignedVoteResponse>;

            /**
             * Calls SignProposal.
             * @param request SignProposalRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SignedProposalResponse
             */
            public signProposal(request: tendermint.privval.ISignProposalRequest, callback: tendermint.privval.PrivValidatorAPI.SignProposalCallback): void;

            /**
             * Calls SignProposal.
             * @param request SignProposalRequest message or plain object
             * @returns Promise
             */
            public signProposal(request: tendermint.privval.ISignProposalRequest): Promise<tendermint.privval.SignedProposalResponse>;
        }

        namespace PrivValidatorAPI {

            /**
             * Callback as used by {@link tendermint.privval.PrivValidatorAPI#getPubKey}.
             * @param error Error, if any
             * @param [response] PubKeyResponse
             */
            type GetPubKeyCallback = (error: (Error|null), response?: tendermint.privval.PubKeyResponse) => void;

            /**
             * Callback as used by {@link tendermint.privval.PrivValidatorAPI#signVote}.
             * @param error Error, if any
             * @param [response] SignedVoteResponse
             */
            type SignVoteCallback = (error: (Error|null), response?: tendermint.privval.SignedVoteResponse) => void;

            /**
             * Callback as used by {@link tendermint.privval.PrivValidatorAPI#signProposal}.
             * @param error Error, if any
             * @param [response] SignedProposalResponse
             */
            type SignProposalCallback = (error: (Error|null), response?: tendermint.privval.SignedProposalResponse) => void;
        }

        /** Errors enum. */
        enum Errors {
            ERRORS_UNKNOWN = 0,
            ERRORS_UNEXPECTED_RESPONSE = 1,
            ERRORS_NO_CONNECTION = 2,
            ERRORS_CONNECTION_TIMEOUT = 3,
            ERRORS_READ_TIMEOUT = 4,
            ERRORS_WRITE_TIMEOUT = 5
        }

        /** Properties of a RemoteSignerError. */
        interface IRemoteSignerError {

            /** RemoteSignerError code */
            code?: (number|null);

            /** RemoteSignerError description */
            description?: (string|null);
        }

        /** Represents a RemoteSignerError. */
        class RemoteSignerError implements IRemoteSignerError {

            /**
             * Constructs a new RemoteSignerError.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.IRemoteSignerError);

            /** RemoteSignerError code. */
            public code: number;

            /** RemoteSignerError description. */
            public description: string;

            /**
             * Creates a new RemoteSignerError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoteSignerError instance
             */
            public static create(properties?: tendermint.privval.IRemoteSignerError): tendermint.privval.RemoteSignerError;

            /**
             * Encodes the specified RemoteSignerError message. Does not implicitly {@link tendermint.privval.RemoteSignerError.verify|verify} messages.
             * @param message RemoteSignerError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.IRemoteSignerError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoteSignerError message, length delimited. Does not implicitly {@link tendermint.privval.RemoteSignerError.verify|verify} messages.
             * @param message RemoteSignerError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.IRemoteSignerError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoteSignerError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoteSignerError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.RemoteSignerError;

            /**
             * Decodes a RemoteSignerError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoteSignerError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.RemoteSignerError;

            /**
             * Verifies a RemoteSignerError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoteSignerError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoteSignerError
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.RemoteSignerError;

            /**
             * Creates a plain object from a RemoteSignerError message. Also converts values to other types if specified.
             * @param message RemoteSignerError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.RemoteSignerError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoteSignerError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PubKeyRequest. */
        interface IPubKeyRequest {

            /** PubKeyRequest chainId */
            chainId?: (string|null);
        }

        /** Represents a PubKeyRequest. */
        class PubKeyRequest implements IPubKeyRequest {

            /**
             * Constructs a new PubKeyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.IPubKeyRequest);

            /** PubKeyRequest chainId. */
            public chainId: string;

            /**
             * Creates a new PubKeyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PubKeyRequest instance
             */
            public static create(properties?: tendermint.privval.IPubKeyRequest): tendermint.privval.PubKeyRequest;

            /**
             * Encodes the specified PubKeyRequest message. Does not implicitly {@link tendermint.privval.PubKeyRequest.verify|verify} messages.
             * @param message PubKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.IPubKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PubKeyRequest message, length delimited. Does not implicitly {@link tendermint.privval.PubKeyRequest.verify|verify} messages.
             * @param message PubKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.IPubKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PubKeyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PubKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.PubKeyRequest;

            /**
             * Decodes a PubKeyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PubKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.PubKeyRequest;

            /**
             * Verifies a PubKeyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PubKeyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PubKeyRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.PubKeyRequest;

            /**
             * Creates a plain object from a PubKeyRequest message. Also converts values to other types if specified.
             * @param message PubKeyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.PubKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PubKeyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PubKeyResponse. */
        interface IPubKeyResponse {

            /** PubKeyResponse pubKey */
            pubKey?: (tendermint.crypto.IPublicKey|null);

            /** PubKeyResponse error */
            error?: (tendermint.privval.IRemoteSignerError|null);
        }

        /** Represents a PubKeyResponse. */
        class PubKeyResponse implements IPubKeyResponse {

            /**
             * Constructs a new PubKeyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.IPubKeyResponse);

            /** PubKeyResponse pubKey. */
            public pubKey?: (tendermint.crypto.IPublicKey|null);

            /** PubKeyResponse error. */
            public error?: (tendermint.privval.IRemoteSignerError|null);

            /**
             * Creates a new PubKeyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PubKeyResponse instance
             */
            public static create(properties?: tendermint.privval.IPubKeyResponse): tendermint.privval.PubKeyResponse;

            /**
             * Encodes the specified PubKeyResponse message. Does not implicitly {@link tendermint.privval.PubKeyResponse.verify|verify} messages.
             * @param message PubKeyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.IPubKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PubKeyResponse message, length delimited. Does not implicitly {@link tendermint.privval.PubKeyResponse.verify|verify} messages.
             * @param message PubKeyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.IPubKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PubKeyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PubKeyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.PubKeyResponse;

            /**
             * Decodes a PubKeyResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PubKeyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.PubKeyResponse;

            /**
             * Verifies a PubKeyResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PubKeyResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PubKeyResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.PubKeyResponse;

            /**
             * Creates a plain object from a PubKeyResponse message. Also converts values to other types if specified.
             * @param message PubKeyResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.PubKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PubKeyResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignVoteRequest. */
        interface ISignVoteRequest {

            /** SignVoteRequest vote */
            vote?: (tendermint.types.IVote|null);

            /** SignVoteRequest chainId */
            chainId?: (string|null);
        }

        /** Represents a SignVoteRequest. */
        class SignVoteRequest implements ISignVoteRequest {

            /**
             * Constructs a new SignVoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.ISignVoteRequest);

            /** SignVoteRequest vote. */
            public vote?: (tendermint.types.IVote|null);

            /** SignVoteRequest chainId. */
            public chainId: string;

            /**
             * Creates a new SignVoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignVoteRequest instance
             */
            public static create(properties?: tendermint.privval.ISignVoteRequest): tendermint.privval.SignVoteRequest;

            /**
             * Encodes the specified SignVoteRequest message. Does not implicitly {@link tendermint.privval.SignVoteRequest.verify|verify} messages.
             * @param message SignVoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.ISignVoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignVoteRequest message, length delimited. Does not implicitly {@link tendermint.privval.SignVoteRequest.verify|verify} messages.
             * @param message SignVoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.ISignVoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignVoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignVoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.SignVoteRequest;

            /**
             * Decodes a SignVoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignVoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.SignVoteRequest;

            /**
             * Verifies a SignVoteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignVoteRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignVoteRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.SignVoteRequest;

            /**
             * Creates a plain object from a SignVoteRequest message. Also converts values to other types if specified.
             * @param message SignVoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.SignVoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignVoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignedVoteResponse. */
        interface ISignedVoteResponse {

            /** SignedVoteResponse vote */
            vote?: (tendermint.types.IVote|null);

            /** SignedVoteResponse error */
            error?: (tendermint.privval.IRemoteSignerError|null);
        }

        /** Represents a SignedVoteResponse. */
        class SignedVoteResponse implements ISignedVoteResponse {

            /**
             * Constructs a new SignedVoteResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.ISignedVoteResponse);

            /** SignedVoteResponse vote. */
            public vote?: (tendermint.types.IVote|null);

            /** SignedVoteResponse error. */
            public error?: (tendermint.privval.IRemoteSignerError|null);

            /**
             * Creates a new SignedVoteResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedVoteResponse instance
             */
            public static create(properties?: tendermint.privval.ISignedVoteResponse): tendermint.privval.SignedVoteResponse;

            /**
             * Encodes the specified SignedVoteResponse message. Does not implicitly {@link tendermint.privval.SignedVoteResponse.verify|verify} messages.
             * @param message SignedVoteResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.ISignedVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignedVoteResponse message, length delimited. Does not implicitly {@link tendermint.privval.SignedVoteResponse.verify|verify} messages.
             * @param message SignedVoteResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.ISignedVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedVoteResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignedVoteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.SignedVoteResponse;

            /**
             * Decodes a SignedVoteResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignedVoteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.SignedVoteResponse;

            /**
             * Verifies a SignedVoteResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignedVoteResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignedVoteResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.SignedVoteResponse;

            /**
             * Creates a plain object from a SignedVoteResponse message. Also converts values to other types if specified.
             * @param message SignedVoteResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.SignedVoteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignedVoteResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignProposalRequest. */
        interface ISignProposalRequest {

            /** SignProposalRequest proposal */
            proposal?: (tendermint.types.IProposal|null);

            /** SignProposalRequest chainId */
            chainId?: (string|null);
        }

        /** Represents a SignProposalRequest. */
        class SignProposalRequest implements ISignProposalRequest {

            /**
             * Constructs a new SignProposalRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.ISignProposalRequest);

            /** SignProposalRequest proposal. */
            public proposal?: (tendermint.types.IProposal|null);

            /** SignProposalRequest chainId. */
            public chainId: string;

            /**
             * Creates a new SignProposalRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignProposalRequest instance
             */
            public static create(properties?: tendermint.privval.ISignProposalRequest): tendermint.privval.SignProposalRequest;

            /**
             * Encodes the specified SignProposalRequest message. Does not implicitly {@link tendermint.privval.SignProposalRequest.verify|verify} messages.
             * @param message SignProposalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.ISignProposalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignProposalRequest message, length delimited. Does not implicitly {@link tendermint.privval.SignProposalRequest.verify|verify} messages.
             * @param message SignProposalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.ISignProposalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignProposalRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignProposalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.SignProposalRequest;

            /**
             * Decodes a SignProposalRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignProposalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.SignProposalRequest;

            /**
             * Verifies a SignProposalRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignProposalRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignProposalRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.SignProposalRequest;

            /**
             * Creates a plain object from a SignProposalRequest message. Also converts values to other types if specified.
             * @param message SignProposalRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.SignProposalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignProposalRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignedProposalResponse. */
        interface ISignedProposalResponse {

            /** SignedProposalResponse proposal */
            proposal?: (tendermint.types.IProposal|null);

            /** SignedProposalResponse error */
            error?: (tendermint.privval.IRemoteSignerError|null);
        }

        /** Represents a SignedProposalResponse. */
        class SignedProposalResponse implements ISignedProposalResponse {

            /**
             * Constructs a new SignedProposalResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.ISignedProposalResponse);

            /** SignedProposalResponse proposal. */
            public proposal?: (tendermint.types.IProposal|null);

            /** SignedProposalResponse error. */
            public error?: (tendermint.privval.IRemoteSignerError|null);

            /**
             * Creates a new SignedProposalResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedProposalResponse instance
             */
            public static create(properties?: tendermint.privval.ISignedProposalResponse): tendermint.privval.SignedProposalResponse;

            /**
             * Encodes the specified SignedProposalResponse message. Does not implicitly {@link tendermint.privval.SignedProposalResponse.verify|verify} messages.
             * @param message SignedProposalResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.ISignedProposalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignedProposalResponse message, length delimited. Does not implicitly {@link tendermint.privval.SignedProposalResponse.verify|verify} messages.
             * @param message SignedProposalResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.ISignedProposalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedProposalResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignedProposalResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.SignedProposalResponse;

            /**
             * Decodes a SignedProposalResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignedProposalResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.SignedProposalResponse;

            /**
             * Verifies a SignedProposalResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignedProposalResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignedProposalResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.SignedProposalResponse;

            /**
             * Creates a plain object from a SignedProposalResponse message. Also converts values to other types if specified.
             * @param message SignedProposalResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.SignedProposalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignedProposalResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PingRequest. */
        interface IPingRequest {
        }

        /** Represents a PingRequest. */
        class PingRequest implements IPingRequest {

            /**
             * Constructs a new PingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.IPingRequest);

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingRequest instance
             */
            public static create(properties?: tendermint.privval.IPingRequest): tendermint.privval.PingRequest;

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link tendermint.privval.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link tendermint.privval.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.PingRequest;

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.PingRequest;

            /**
             * Verifies a PingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.PingRequest;

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @param message PingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PingResponse. */
        interface IPingResponse {
        }

        /** Represents a PingResponse. */
        class PingResponse implements IPingResponse {

            /**
             * Constructs a new PingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.IPingResponse);

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingResponse instance
             */
            public static create(properties?: tendermint.privval.IPingResponse): tendermint.privval.PingResponse;

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link tendermint.privval.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link tendermint.privval.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.PingResponse;

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.PingResponse;

            /**
             * Verifies a PingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.PingResponse;

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @param message PingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message pubKeyRequest */
            pubKeyRequest?: (tendermint.privval.IPubKeyRequest|null);

            /** Message pubKeyResponse */
            pubKeyResponse?: (tendermint.privval.IPubKeyResponse|null);

            /** Message signVoteRequest */
            signVoteRequest?: (tendermint.privval.ISignVoteRequest|null);

            /** Message signedVoteResponse */
            signedVoteResponse?: (tendermint.privval.ISignedVoteResponse|null);

            /** Message signProposalRequest */
            signProposalRequest?: (tendermint.privval.ISignProposalRequest|null);

            /** Message signedProposalResponse */
            signedProposalResponse?: (tendermint.privval.ISignedProposalResponse|null);

            /** Message pingRequest */
            pingRequest?: (tendermint.privval.IPingRequest|null);

            /** Message pingResponse */
            pingResponse?: (tendermint.privval.IPingResponse|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.privval.IMessage);

            /** Message pubKeyRequest. */
            public pubKeyRequest?: (tendermint.privval.IPubKeyRequest|null);

            /** Message pubKeyResponse. */
            public pubKeyResponse?: (tendermint.privval.IPubKeyResponse|null);

            /** Message signVoteRequest. */
            public signVoteRequest?: (tendermint.privval.ISignVoteRequest|null);

            /** Message signedVoteResponse. */
            public signedVoteResponse?: (tendermint.privval.ISignedVoteResponse|null);

            /** Message signProposalRequest. */
            public signProposalRequest?: (tendermint.privval.ISignProposalRequest|null);

            /** Message signedProposalResponse. */
            public signedProposalResponse?: (tendermint.privval.ISignedProposalResponse|null);

            /** Message pingRequest. */
            public pingRequest?: (tendermint.privval.IPingRequest|null);

            /** Message pingResponse. */
            public pingResponse?: (tendermint.privval.IPingResponse|null);

            /** Message sum. */
            public sum?: ("pubKeyRequest"|"pubKeyResponse"|"signVoteRequest"|"signedVoteResponse"|"signProposalRequest"|"signedProposalResponse"|"pingRequest"|"pingResponse");

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: tendermint.privval.IMessage): tendermint.privval.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link tendermint.privval.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.privval.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link tendermint.privval.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.privval.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.privval.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.privval.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): tendermint.privval.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.privval.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Namespace grpc. */
        namespace grpc {

            /** Properties of a RequestPing. */
            interface IRequestPing {
            }

            /** Represents a RequestPing. */
            class RequestPing implements IRequestPing {

                /**
                 * Constructs a new RequestPing.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.rpc.grpc.IRequestPing);

                /**
                 * Creates a new RequestPing instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestPing instance
                 */
                public static create(properties?: tendermint.rpc.grpc.IRequestPing): tendermint.rpc.grpc.RequestPing;

                /**
                 * Encodes the specified RequestPing message. Does not implicitly {@link tendermint.rpc.grpc.RequestPing.verify|verify} messages.
                 * @param message RequestPing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.rpc.grpc.IRequestPing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestPing message, length delimited. Does not implicitly {@link tendermint.rpc.grpc.RequestPing.verify|verify} messages.
                 * @param message RequestPing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.rpc.grpc.IRequestPing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestPing message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestPing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.rpc.grpc.RequestPing;

                /**
                 * Decodes a RequestPing message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestPing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.rpc.grpc.RequestPing;

                /**
                 * Verifies a RequestPing message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestPing message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestPing
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.rpc.grpc.RequestPing;

                /**
                 * Creates a plain object from a RequestPing message. Also converts values to other types if specified.
                 * @param message RequestPing
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.rpc.grpc.RequestPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestPing to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RequestBroadcastTx. */
            interface IRequestBroadcastTx {

                /** RequestBroadcastTx tx */
                tx?: (Uint8Array|null);
            }

            /** Represents a RequestBroadcastTx. */
            class RequestBroadcastTx implements IRequestBroadcastTx {

                /**
                 * Constructs a new RequestBroadcastTx.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.rpc.grpc.IRequestBroadcastTx);

                /** RequestBroadcastTx tx. */
                public tx: Uint8Array;

                /**
                 * Creates a new RequestBroadcastTx instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestBroadcastTx instance
                 */
                public static create(properties?: tendermint.rpc.grpc.IRequestBroadcastTx): tendermint.rpc.grpc.RequestBroadcastTx;

                /**
                 * Encodes the specified RequestBroadcastTx message. Does not implicitly {@link tendermint.rpc.grpc.RequestBroadcastTx.verify|verify} messages.
                 * @param message RequestBroadcastTx message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.rpc.grpc.IRequestBroadcastTx, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestBroadcastTx message, length delimited. Does not implicitly {@link tendermint.rpc.grpc.RequestBroadcastTx.verify|verify} messages.
                 * @param message RequestBroadcastTx message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.rpc.grpc.IRequestBroadcastTx, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestBroadcastTx message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestBroadcastTx
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.rpc.grpc.RequestBroadcastTx;

                /**
                 * Decodes a RequestBroadcastTx message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestBroadcastTx
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.rpc.grpc.RequestBroadcastTx;

                /**
                 * Verifies a RequestBroadcastTx message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestBroadcastTx message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestBroadcastTx
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.rpc.grpc.RequestBroadcastTx;

                /**
                 * Creates a plain object from a RequestBroadcastTx message. Also converts values to other types if specified.
                 * @param message RequestBroadcastTx
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.rpc.grpc.RequestBroadcastTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestBroadcastTx to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResponsePing. */
            interface IResponsePing {
            }

            /** Represents a ResponsePing. */
            class ResponsePing implements IResponsePing {

                /**
                 * Constructs a new ResponsePing.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.rpc.grpc.IResponsePing);

                /**
                 * Creates a new ResponsePing instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResponsePing instance
                 */
                public static create(properties?: tendermint.rpc.grpc.IResponsePing): tendermint.rpc.grpc.ResponsePing;

                /**
                 * Encodes the specified ResponsePing message. Does not implicitly {@link tendermint.rpc.grpc.ResponsePing.verify|verify} messages.
                 * @param message ResponsePing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.rpc.grpc.IResponsePing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResponsePing message, length delimited. Does not implicitly {@link tendermint.rpc.grpc.ResponsePing.verify|verify} messages.
                 * @param message ResponsePing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.rpc.grpc.IResponsePing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResponsePing message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResponsePing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.rpc.grpc.ResponsePing;

                /**
                 * Decodes a ResponsePing message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResponsePing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.rpc.grpc.ResponsePing;

                /**
                 * Verifies a ResponsePing message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResponsePing message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResponsePing
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.rpc.grpc.ResponsePing;

                /**
                 * Creates a plain object from a ResponsePing message. Also converts values to other types if specified.
                 * @param message ResponsePing
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.rpc.grpc.ResponsePing, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResponsePing to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResponseBroadcastTx. */
            interface IResponseBroadcastTx {

                /** ResponseBroadcastTx checkTx */
                checkTx?: (tendermint.abci.IResponseCheckTx|null);

                /** ResponseBroadcastTx deliverTx */
                deliverTx?: (tendermint.abci.IResponseDeliverTx|null);
            }

            /** Represents a ResponseBroadcastTx. */
            class ResponseBroadcastTx implements IResponseBroadcastTx {

                /**
                 * Constructs a new ResponseBroadcastTx.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.rpc.grpc.IResponseBroadcastTx);

                /** ResponseBroadcastTx checkTx. */
                public checkTx?: (tendermint.abci.IResponseCheckTx|null);

                /** ResponseBroadcastTx deliverTx. */
                public deliverTx?: (tendermint.abci.IResponseDeliverTx|null);

                /**
                 * Creates a new ResponseBroadcastTx instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResponseBroadcastTx instance
                 */
                public static create(properties?: tendermint.rpc.grpc.IResponseBroadcastTx): tendermint.rpc.grpc.ResponseBroadcastTx;

                /**
                 * Encodes the specified ResponseBroadcastTx message. Does not implicitly {@link tendermint.rpc.grpc.ResponseBroadcastTx.verify|verify} messages.
                 * @param message ResponseBroadcastTx message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.rpc.grpc.IResponseBroadcastTx, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResponseBroadcastTx message, length delimited. Does not implicitly {@link tendermint.rpc.grpc.ResponseBroadcastTx.verify|verify} messages.
                 * @param message ResponseBroadcastTx message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.rpc.grpc.IResponseBroadcastTx, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResponseBroadcastTx message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResponseBroadcastTx
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.rpc.grpc.ResponseBroadcastTx;

                /**
                 * Decodes a ResponseBroadcastTx message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResponseBroadcastTx
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.rpc.grpc.ResponseBroadcastTx;

                /**
                 * Verifies a ResponseBroadcastTx message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResponseBroadcastTx message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResponseBroadcastTx
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.rpc.grpc.ResponseBroadcastTx;

                /**
                 * Creates a plain object from a ResponseBroadcastTx message. Also converts values to other types if specified.
                 * @param message ResponseBroadcastTx
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.rpc.grpc.ResponseBroadcastTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResponseBroadcastTx to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a BroadcastAPI */
            class BroadcastAPI extends $protobuf.rpc.Service {

                /**
                 * Constructs a new BroadcastAPI service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new BroadcastAPI service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BroadcastAPI;

                /**
                 * Calls Ping.
                 * @param request RequestPing message or plain object
                 * @param callback Node-style callback called with the error, if any, and ResponsePing
                 */
                public ping(request: tendermint.rpc.grpc.IRequestPing, callback: tendermint.rpc.grpc.BroadcastAPI.PingCallback): void;

                /**
                 * Calls Ping.
                 * @param request RequestPing message or plain object
                 * @returns Promise
                 */
                public ping(request: tendermint.rpc.grpc.IRequestPing): Promise<tendermint.rpc.grpc.ResponsePing>;

                /**
                 * Calls BroadcastTx.
                 * @param request RequestBroadcastTx message or plain object
                 * @param callback Node-style callback called with the error, if any, and ResponseBroadcastTx
                 */
                public broadcastTx(request: tendermint.rpc.grpc.IRequestBroadcastTx, callback: tendermint.rpc.grpc.BroadcastAPI.BroadcastTxCallback): void;

                /**
                 * Calls BroadcastTx.
                 * @param request RequestBroadcastTx message or plain object
                 * @returns Promise
                 */
                public broadcastTx(request: tendermint.rpc.grpc.IRequestBroadcastTx): Promise<tendermint.rpc.grpc.ResponseBroadcastTx>;
            }

            namespace BroadcastAPI {

                /**
                 * Callback as used by {@link tendermint.rpc.grpc.BroadcastAPI#ping}.
                 * @param error Error, if any
                 * @param [response] ResponsePing
                 */
                type PingCallback = (error: (Error|null), response?: tendermint.rpc.grpc.ResponsePing) => void;

                /**
                 * Callback as used by {@link tendermint.rpc.grpc.BroadcastAPI#broadcastTx}.
                 * @param error Error, if any
                 * @param [response] ResponseBroadcastTx
                 */
                type BroadcastTxCallback = (error: (Error|null), response?: tendermint.rpc.grpc.ResponseBroadcastTx) => void;
            }
        }
    }

    /** Namespace state. */
    namespace state {

        /** Properties of a ABCIResponses. */
        interface IABCIResponses {

            /** ABCIResponses deliverTxs */
            deliverTxs?: (tendermint.abci.IResponseDeliverTx[]|null);

            /** ABCIResponses endBlock */
            endBlock?: (tendermint.abci.IResponseEndBlock|null);

            /** ABCIResponses beginBlock */
            beginBlock?: (tendermint.abci.IResponseBeginBlock|null);
        }

        /** Represents a ABCIResponses. */
        class ABCIResponses implements IABCIResponses {

            /**
             * Constructs a new ABCIResponses.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.state.IABCIResponses);

            /** ABCIResponses deliverTxs. */
            public deliverTxs: tendermint.abci.IResponseDeliverTx[];

            /** ABCIResponses endBlock. */
            public endBlock?: (tendermint.abci.IResponseEndBlock|null);

            /** ABCIResponses beginBlock. */
            public beginBlock?: (tendermint.abci.IResponseBeginBlock|null);

            /**
             * Creates a new ABCIResponses instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ABCIResponses instance
             */
            public static create(properties?: tendermint.state.IABCIResponses): tendermint.state.ABCIResponses;

            /**
             * Encodes the specified ABCIResponses message. Does not implicitly {@link tendermint.state.ABCIResponses.verify|verify} messages.
             * @param message ABCIResponses message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.state.IABCIResponses, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ABCIResponses message, length delimited. Does not implicitly {@link tendermint.state.ABCIResponses.verify|verify} messages.
             * @param message ABCIResponses message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.state.IABCIResponses, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ABCIResponses message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ABCIResponses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.state.ABCIResponses;

            /**
             * Decodes a ABCIResponses message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ABCIResponses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.state.ABCIResponses;

            /**
             * Verifies a ABCIResponses message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ABCIResponses message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ABCIResponses
             */
            public static fromObject(object: { [k: string]: any }): tendermint.state.ABCIResponses;

            /**
             * Creates a plain object from a ABCIResponses message. Also converts values to other types if specified.
             * @param message ABCIResponses
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.state.ABCIResponses, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ABCIResponses to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorsInfo. */
        interface IValidatorsInfo {

            /** ValidatorsInfo validatorSet */
            validatorSet?: (tendermint.types.IValidatorSet|null);

            /** ValidatorsInfo lastHeightChanged */
            lastHeightChanged?: (number|Long|null);
        }

        /** Represents a ValidatorsInfo. */
        class ValidatorsInfo implements IValidatorsInfo {

            /**
             * Constructs a new ValidatorsInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.state.IValidatorsInfo);

            /** ValidatorsInfo validatorSet. */
            public validatorSet?: (tendermint.types.IValidatorSet|null);

            /** ValidatorsInfo lastHeightChanged. */
            public lastHeightChanged: (number|Long);

            /**
             * Creates a new ValidatorsInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorsInfo instance
             */
            public static create(properties?: tendermint.state.IValidatorsInfo): tendermint.state.ValidatorsInfo;

            /**
             * Encodes the specified ValidatorsInfo message. Does not implicitly {@link tendermint.state.ValidatorsInfo.verify|verify} messages.
             * @param message ValidatorsInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.state.IValidatorsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorsInfo message, length delimited. Does not implicitly {@link tendermint.state.ValidatorsInfo.verify|verify} messages.
             * @param message ValidatorsInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.state.IValidatorsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorsInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.state.ValidatorsInfo;

            /**
             * Decodes a ValidatorsInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.state.ValidatorsInfo;

            /**
             * Verifies a ValidatorsInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorsInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorsInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.state.ValidatorsInfo;

            /**
             * Creates a plain object from a ValidatorsInfo message. Also converts values to other types if specified.
             * @param message ValidatorsInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.state.ValidatorsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorsInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConsensusParamsInfo. */
        interface IConsensusParamsInfo {

            /** ConsensusParamsInfo consensusParams */
            consensusParams?: (tendermint.types.IConsensusParams|null);

            /** ConsensusParamsInfo lastHeightChanged */
            lastHeightChanged?: (number|Long|null);
        }

        /** Represents a ConsensusParamsInfo. */
        class ConsensusParamsInfo implements IConsensusParamsInfo {

            /**
             * Constructs a new ConsensusParamsInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.state.IConsensusParamsInfo);

            /** ConsensusParamsInfo consensusParams. */
            public consensusParams?: (tendermint.types.IConsensusParams|null);

            /** ConsensusParamsInfo lastHeightChanged. */
            public lastHeightChanged: (number|Long);

            /**
             * Creates a new ConsensusParamsInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsensusParamsInfo instance
             */
            public static create(properties?: tendermint.state.IConsensusParamsInfo): tendermint.state.ConsensusParamsInfo;

            /**
             * Encodes the specified ConsensusParamsInfo message. Does not implicitly {@link tendermint.state.ConsensusParamsInfo.verify|verify} messages.
             * @param message ConsensusParamsInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.state.IConsensusParamsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsensusParamsInfo message, length delimited. Does not implicitly {@link tendermint.state.ConsensusParamsInfo.verify|verify} messages.
             * @param message ConsensusParamsInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.state.IConsensusParamsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsensusParamsInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsensusParamsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.state.ConsensusParamsInfo;

            /**
             * Decodes a ConsensusParamsInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsensusParamsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.state.ConsensusParamsInfo;

            /**
             * Verifies a ConsensusParamsInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsensusParamsInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsensusParamsInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.state.ConsensusParamsInfo;

            /**
             * Creates a plain object from a ConsensusParamsInfo message. Also converts values to other types if specified.
             * @param message ConsensusParamsInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.state.ConsensusParamsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsensusParamsInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Version. */
        interface IVersion {

            /** Version consensus */
            consensus?: (tendermint.version.IConsensus|null);

            /** Version software */
            software?: (string|null);
        }

        /** Represents a Version. */
        class Version implements IVersion {

            /**
             * Constructs a new Version.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.state.IVersion);

            /** Version consensus. */
            public consensus?: (tendermint.version.IConsensus|null);

            /** Version software. */
            public software: string;

            /**
             * Creates a new Version instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Version instance
             */
            public static create(properties?: tendermint.state.IVersion): tendermint.state.Version;

            /**
             * Encodes the specified Version message. Does not implicitly {@link tendermint.state.Version.verify|verify} messages.
             * @param message Version message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.state.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Version message, length delimited. Does not implicitly {@link tendermint.state.Version.verify|verify} messages.
             * @param message Version message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.state.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Version message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Version
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.state.Version;

            /**
             * Decodes a Version message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Version
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.state.Version;

            /**
             * Verifies a Version message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Version message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Version
             */
            public static fromObject(object: { [k: string]: any }): tendermint.state.Version;

            /**
             * Creates a plain object from a Version message. Also converts values to other types if specified.
             * @param message Version
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.state.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Version to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a State. */
        interface IState {

            /** State version */
            version?: (tendermint.state.IVersion|null);

            /** State chainId */
            chainId?: (string|null);

            /** State initialHeight */
            initialHeight?: (number|Long|null);

            /** State lastBlockHeight */
            lastBlockHeight?: (number|Long|null);

            /** State lastBlockId */
            lastBlockId?: (tendermint.types.IBlockID|null);

            /** State lastBlockTime */
            lastBlockTime?: (google.protobuf.ITimestamp|null);

            /** State nextValidators */
            nextValidators?: (tendermint.types.IValidatorSet|null);

            /** State validators */
            validators?: (tendermint.types.IValidatorSet|null);

            /** State lastValidators */
            lastValidators?: (tendermint.types.IValidatorSet|null);

            /** State lastHeightValidatorsChanged */
            lastHeightValidatorsChanged?: (number|Long|null);

            /** State consensusParams */
            consensusParams?: (tendermint.types.IConsensusParams|null);

            /** State lastHeightConsensusParamsChanged */
            lastHeightConsensusParamsChanged?: (number|Long|null);

            /** State lastResultsHash */
            lastResultsHash?: (Uint8Array|null);

            /** State appHash */
            appHash?: (Uint8Array|null);
        }

        /** Represents a State. */
        class State implements IState {

            /**
             * Constructs a new State.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.state.IState);

            /** State version. */
            public version?: (tendermint.state.IVersion|null);

            /** State chainId. */
            public chainId: string;

            /** State initialHeight. */
            public initialHeight: (number|Long);

            /** State lastBlockHeight. */
            public lastBlockHeight: (number|Long);

            /** State lastBlockId. */
            public lastBlockId?: (tendermint.types.IBlockID|null);

            /** State lastBlockTime. */
            public lastBlockTime?: (google.protobuf.ITimestamp|null);

            /** State nextValidators. */
            public nextValidators?: (tendermint.types.IValidatorSet|null);

            /** State validators. */
            public validators?: (tendermint.types.IValidatorSet|null);

            /** State lastValidators. */
            public lastValidators?: (tendermint.types.IValidatorSet|null);

            /** State lastHeightValidatorsChanged. */
            public lastHeightValidatorsChanged: (number|Long);

            /** State consensusParams. */
            public consensusParams?: (tendermint.types.IConsensusParams|null);

            /** State lastHeightConsensusParamsChanged. */
            public lastHeightConsensusParamsChanged: (number|Long);

            /** State lastResultsHash. */
            public lastResultsHash: Uint8Array;

            /** State appHash. */
            public appHash: Uint8Array;

            /**
             * Creates a new State instance using the specified properties.
             * @param [properties] Properties to set
             * @returns State instance
             */
            public static create(properties?: tendermint.state.IState): tendermint.state.State;

            /**
             * Encodes the specified State message. Does not implicitly {@link tendermint.state.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.state.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link tendermint.state.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.state.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a State message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.state.State;

            /**
             * Decodes a State message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.state.State;

            /**
             * Verifies a State message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns State
             */
            public static fromObject(object: { [k: string]: any }): tendermint.state.State;

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @param message State
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.state.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this State to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace statesync. */
    namespace statesync {

        /** Properties of a Message. */
        interface IMessage {

            /** Message snapshotsRequest */
            snapshotsRequest?: (tendermint.statesync.ISnapshotsRequest|null);

            /** Message snapshotsResponse */
            snapshotsResponse?: (tendermint.statesync.ISnapshotsResponse|null);

            /** Message chunkRequest */
            chunkRequest?: (tendermint.statesync.IChunkRequest|null);

            /** Message chunkResponse */
            chunkResponse?: (tendermint.statesync.IChunkResponse|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.statesync.IMessage);

            /** Message snapshotsRequest. */
            public snapshotsRequest?: (tendermint.statesync.ISnapshotsRequest|null);

            /** Message snapshotsResponse. */
            public snapshotsResponse?: (tendermint.statesync.ISnapshotsResponse|null);

            /** Message chunkRequest. */
            public chunkRequest?: (tendermint.statesync.IChunkRequest|null);

            /** Message chunkResponse. */
            public chunkResponse?: (tendermint.statesync.IChunkResponse|null);

            /** Message sum. */
            public sum?: ("snapshotsRequest"|"snapshotsResponse"|"chunkRequest"|"chunkResponse");

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: tendermint.statesync.IMessage): tendermint.statesync.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link tendermint.statesync.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.statesync.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link tendermint.statesync.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.statesync.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.statesync.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.statesync.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            public static fromObject(object: { [k: string]: any }): tendermint.statesync.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.statesync.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SnapshotsRequest. */
        interface ISnapshotsRequest {
        }

        /** Represents a SnapshotsRequest. */
        class SnapshotsRequest implements ISnapshotsRequest {

            /**
             * Constructs a new SnapshotsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.statesync.ISnapshotsRequest);

            /**
             * Creates a new SnapshotsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SnapshotsRequest instance
             */
            public static create(properties?: tendermint.statesync.ISnapshotsRequest): tendermint.statesync.SnapshotsRequest;

            /**
             * Encodes the specified SnapshotsRequest message. Does not implicitly {@link tendermint.statesync.SnapshotsRequest.verify|verify} messages.
             * @param message SnapshotsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.statesync.ISnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SnapshotsRequest message, length delimited. Does not implicitly {@link tendermint.statesync.SnapshotsRequest.verify|verify} messages.
             * @param message SnapshotsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.statesync.ISnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SnapshotsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SnapshotsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.statesync.SnapshotsRequest;

            /**
             * Decodes a SnapshotsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SnapshotsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.statesync.SnapshotsRequest;

            /**
             * Verifies a SnapshotsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SnapshotsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SnapshotsRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.statesync.SnapshotsRequest;

            /**
             * Creates a plain object from a SnapshotsRequest message. Also converts values to other types if specified.
             * @param message SnapshotsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.statesync.SnapshotsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SnapshotsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SnapshotsResponse. */
        interface ISnapshotsResponse {

            /** SnapshotsResponse height */
            height?: (number|Long|null);

            /** SnapshotsResponse format */
            format?: (number|null);

            /** SnapshotsResponse chunks */
            chunks?: (number|null);

            /** SnapshotsResponse hash */
            hash?: (Uint8Array|null);

            /** SnapshotsResponse metadata */
            metadata?: (Uint8Array|null);
        }

        /** Represents a SnapshotsResponse. */
        class SnapshotsResponse implements ISnapshotsResponse {

            /**
             * Constructs a new SnapshotsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.statesync.ISnapshotsResponse);

            /** SnapshotsResponse height. */
            public height: (number|Long);

            /** SnapshotsResponse format. */
            public format: number;

            /** SnapshotsResponse chunks. */
            public chunks: number;

            /** SnapshotsResponse hash. */
            public hash: Uint8Array;

            /** SnapshotsResponse metadata. */
            public metadata: Uint8Array;

            /**
             * Creates a new SnapshotsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SnapshotsResponse instance
             */
            public static create(properties?: tendermint.statesync.ISnapshotsResponse): tendermint.statesync.SnapshotsResponse;

            /**
             * Encodes the specified SnapshotsResponse message. Does not implicitly {@link tendermint.statesync.SnapshotsResponse.verify|verify} messages.
             * @param message SnapshotsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.statesync.ISnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SnapshotsResponse message, length delimited. Does not implicitly {@link tendermint.statesync.SnapshotsResponse.verify|verify} messages.
             * @param message SnapshotsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.statesync.ISnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SnapshotsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SnapshotsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.statesync.SnapshotsResponse;

            /**
             * Decodes a SnapshotsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SnapshotsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.statesync.SnapshotsResponse;

            /**
             * Verifies a SnapshotsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SnapshotsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SnapshotsResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.statesync.SnapshotsResponse;

            /**
             * Creates a plain object from a SnapshotsResponse message. Also converts values to other types if specified.
             * @param message SnapshotsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.statesync.SnapshotsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SnapshotsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChunkRequest. */
        interface IChunkRequest {

            /** ChunkRequest height */
            height?: (number|Long|null);

            /** ChunkRequest format */
            format?: (number|null);

            /** ChunkRequest index */
            index?: (number|null);
        }

        /** Represents a ChunkRequest. */
        class ChunkRequest implements IChunkRequest {

            /**
             * Constructs a new ChunkRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.statesync.IChunkRequest);

            /** ChunkRequest height. */
            public height: (number|Long);

            /** ChunkRequest format. */
            public format: number;

            /** ChunkRequest index. */
            public index: number;

            /**
             * Creates a new ChunkRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChunkRequest instance
             */
            public static create(properties?: tendermint.statesync.IChunkRequest): tendermint.statesync.ChunkRequest;

            /**
             * Encodes the specified ChunkRequest message. Does not implicitly {@link tendermint.statesync.ChunkRequest.verify|verify} messages.
             * @param message ChunkRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.statesync.IChunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChunkRequest message, length delimited. Does not implicitly {@link tendermint.statesync.ChunkRequest.verify|verify} messages.
             * @param message ChunkRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.statesync.IChunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChunkRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChunkRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.statesync.ChunkRequest;

            /**
             * Decodes a ChunkRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChunkRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.statesync.ChunkRequest;

            /**
             * Verifies a ChunkRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChunkRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChunkRequest
             */
            public static fromObject(object: { [k: string]: any }): tendermint.statesync.ChunkRequest;

            /**
             * Creates a plain object from a ChunkRequest message. Also converts values to other types if specified.
             * @param message ChunkRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.statesync.ChunkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChunkRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChunkResponse. */
        interface IChunkResponse {

            /** ChunkResponse height */
            height?: (number|Long|null);

            /** ChunkResponse format */
            format?: (number|null);

            /** ChunkResponse index */
            index?: (number|null);

            /** ChunkResponse chunk */
            chunk?: (Uint8Array|null);

            /** ChunkResponse missing */
            missing?: (boolean|null);
        }

        /** Represents a ChunkResponse. */
        class ChunkResponse implements IChunkResponse {

            /**
             * Constructs a new ChunkResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.statesync.IChunkResponse);

            /** ChunkResponse height. */
            public height: (number|Long);

            /** ChunkResponse format. */
            public format: number;

            /** ChunkResponse index. */
            public index: number;

            /** ChunkResponse chunk. */
            public chunk: Uint8Array;

            /** ChunkResponse missing. */
            public missing: boolean;

            /**
             * Creates a new ChunkResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChunkResponse instance
             */
            public static create(properties?: tendermint.statesync.IChunkResponse): tendermint.statesync.ChunkResponse;

            /**
             * Encodes the specified ChunkResponse message. Does not implicitly {@link tendermint.statesync.ChunkResponse.verify|verify} messages.
             * @param message ChunkResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.statesync.IChunkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChunkResponse message, length delimited. Does not implicitly {@link tendermint.statesync.ChunkResponse.verify|verify} messages.
             * @param message ChunkResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.statesync.IChunkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChunkResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChunkResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.statesync.ChunkResponse;

            /**
             * Decodes a ChunkResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChunkResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.statesync.ChunkResponse;

            /**
             * Verifies a ChunkResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChunkResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChunkResponse
             */
            public static fromObject(object: { [k: string]: any }): tendermint.statesync.ChunkResponse;

            /**
             * Creates a plain object from a ChunkResponse message. Also converts values to other types if specified.
             * @param message ChunkResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.statesync.ChunkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChunkResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace store. */
    namespace store {

        /** Properties of a BlockStoreState. */
        interface IBlockStoreState {

            /** BlockStoreState base */
            base?: (number|Long|null);

            /** BlockStoreState height */
            height?: (number|Long|null);
        }

        /** Represents a BlockStoreState. */
        class BlockStoreState implements IBlockStoreState {

            /**
             * Constructs a new BlockStoreState.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.store.IBlockStoreState);

            /** BlockStoreState base. */
            public base: (number|Long);

            /** BlockStoreState height. */
            public height: (number|Long);

            /**
             * Creates a new BlockStoreState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockStoreState instance
             */
            public static create(properties?: tendermint.store.IBlockStoreState): tendermint.store.BlockStoreState;

            /**
             * Encodes the specified BlockStoreState message. Does not implicitly {@link tendermint.store.BlockStoreState.verify|verify} messages.
             * @param message BlockStoreState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.store.IBlockStoreState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockStoreState message, length delimited. Does not implicitly {@link tendermint.store.BlockStoreState.verify|verify} messages.
             * @param message BlockStoreState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.store.IBlockStoreState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockStoreState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockStoreState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.store.BlockStoreState;

            /**
             * Decodes a BlockStoreState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockStoreState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.store.BlockStoreState;

            /**
             * Verifies a BlockStoreState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockStoreState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockStoreState
             */
            public static fromObject(object: { [k: string]: any }): tendermint.store.BlockStoreState;

            /**
             * Creates a plain object from a BlockStoreState message. Also converts values to other types if specified.
             * @param message BlockStoreState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.store.BlockStoreState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockStoreState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace types. */
    namespace types {

        /** Properties of a Block. */
        interface IBlock {

            /** Block header */
            header?: (tendermint.types.IHeader|null);

            /** Block data */
            data?: (tendermint.types.IData|null);

            /** Block evidence */
            evidence?: (tendermint.types.IEvidenceList|null);

            /** Block lastCommit */
            lastCommit?: (tendermint.types.ICommit|null);
        }

        /** Represents a Block. */
        class Block implements IBlock {

            /**
             * Constructs a new Block.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlock);

            /** Block header. */
            public header?: (tendermint.types.IHeader|null);

            /** Block data. */
            public data?: (tendermint.types.IData|null);

            /** Block evidence. */
            public evidence?: (tendermint.types.IEvidenceList|null);

            /** Block lastCommit. */
            public lastCommit?: (tendermint.types.ICommit|null);

            /**
             * Creates a new Block instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Block instance
             */
            public static create(properties?: tendermint.types.IBlock): tendermint.types.Block;

            /**
             * Encodes the specified Block message. Does not implicitly {@link tendermint.types.Block.verify|verify} messages.
             * @param message Block message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Block message, length delimited. Does not implicitly {@link tendermint.types.Block.verify|verify} messages.
             * @param message Block message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Block message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Block
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Block;

            /**
             * Decodes a Block message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Block
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Block;

            /**
             * Verifies a Block message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Block message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Block
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Block;

            /**
             * Creates a plain object from a Block message. Also converts values to other types if specified.
             * @param message Block
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Block to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CanonicalBlockID. */
        interface ICanonicalBlockID {

            /** CanonicalBlockID hash */
            hash?: (Uint8Array|null);

            /** CanonicalBlockID partSetHeader */
            partSetHeader?: (tendermint.types.ICanonicalPartSetHeader|null);
        }

        /** Represents a CanonicalBlockID. */
        class CanonicalBlockID implements ICanonicalBlockID {

            /**
             * Constructs a new CanonicalBlockID.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICanonicalBlockID);

            /** CanonicalBlockID hash. */
            public hash: Uint8Array;

            /** CanonicalBlockID partSetHeader. */
            public partSetHeader?: (tendermint.types.ICanonicalPartSetHeader|null);

            /**
             * Creates a new CanonicalBlockID instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanonicalBlockID instance
             */
            public static create(properties?: tendermint.types.ICanonicalBlockID): tendermint.types.CanonicalBlockID;

            /**
             * Encodes the specified CanonicalBlockID message. Does not implicitly {@link tendermint.types.CanonicalBlockID.verify|verify} messages.
             * @param message CanonicalBlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICanonicalBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanonicalBlockID message, length delimited. Does not implicitly {@link tendermint.types.CanonicalBlockID.verify|verify} messages.
             * @param message CanonicalBlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICanonicalBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanonicalBlockID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanonicalBlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.CanonicalBlockID;

            /**
             * Decodes a CanonicalBlockID message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanonicalBlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.CanonicalBlockID;

            /**
             * Verifies a CanonicalBlockID message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanonicalBlockID message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanonicalBlockID
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.CanonicalBlockID;

            /**
             * Creates a plain object from a CanonicalBlockID message. Also converts values to other types if specified.
             * @param message CanonicalBlockID
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.CanonicalBlockID, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanonicalBlockID to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CanonicalPartSetHeader. */
        interface ICanonicalPartSetHeader {

            /** CanonicalPartSetHeader total */
            total?: (number|null);

            /** CanonicalPartSetHeader hash */
            hash?: (Uint8Array|null);
        }

        /** Represents a CanonicalPartSetHeader. */
        class CanonicalPartSetHeader implements ICanonicalPartSetHeader {

            /**
             * Constructs a new CanonicalPartSetHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICanonicalPartSetHeader);

            /** CanonicalPartSetHeader total. */
            public total: number;

            /** CanonicalPartSetHeader hash. */
            public hash: Uint8Array;

            /**
             * Creates a new CanonicalPartSetHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanonicalPartSetHeader instance
             */
            public static create(properties?: tendermint.types.ICanonicalPartSetHeader): tendermint.types.CanonicalPartSetHeader;

            /**
             * Encodes the specified CanonicalPartSetHeader message. Does not implicitly {@link tendermint.types.CanonicalPartSetHeader.verify|verify} messages.
             * @param message CanonicalPartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICanonicalPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanonicalPartSetHeader message, length delimited. Does not implicitly {@link tendermint.types.CanonicalPartSetHeader.verify|verify} messages.
             * @param message CanonicalPartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICanonicalPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanonicalPartSetHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanonicalPartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.CanonicalPartSetHeader;

            /**
             * Decodes a CanonicalPartSetHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanonicalPartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.CanonicalPartSetHeader;

            /**
             * Verifies a CanonicalPartSetHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanonicalPartSetHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanonicalPartSetHeader
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.CanonicalPartSetHeader;

            /**
             * Creates a plain object from a CanonicalPartSetHeader message. Also converts values to other types if specified.
             * @param message CanonicalPartSetHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.CanonicalPartSetHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanonicalPartSetHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CanonicalProposal. */
        interface ICanonicalProposal {

            /** CanonicalProposal type */
            type?: (tendermint.types.SignedMsgType|null);

            /** CanonicalProposal height */
            height?: (number|Long|null);

            /** CanonicalProposal round */
            round?: (number|Long|null);

            /** CanonicalProposal polRound */
            polRound?: (number|Long|null);

            /** CanonicalProposal blockId */
            blockId?: (tendermint.types.ICanonicalBlockID|null);

            /** CanonicalProposal timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** CanonicalProposal chainId */
            chainId?: (string|null);
        }

        /** Represents a CanonicalProposal. */
        class CanonicalProposal implements ICanonicalProposal {

            /**
             * Constructs a new CanonicalProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICanonicalProposal);

            /** CanonicalProposal type. */
            public type: tendermint.types.SignedMsgType;

            /** CanonicalProposal height. */
            public height: (number|Long);

            /** CanonicalProposal round. */
            public round: (number|Long);

            /** CanonicalProposal polRound. */
            public polRound: (number|Long);

            /** CanonicalProposal blockId. */
            public blockId?: (tendermint.types.ICanonicalBlockID|null);

            /** CanonicalProposal timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** CanonicalProposal chainId. */
            public chainId: string;

            /**
             * Creates a new CanonicalProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanonicalProposal instance
             */
            public static create(properties?: tendermint.types.ICanonicalProposal): tendermint.types.CanonicalProposal;

            /**
             * Encodes the specified CanonicalProposal message. Does not implicitly {@link tendermint.types.CanonicalProposal.verify|verify} messages.
             * @param message CanonicalProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICanonicalProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanonicalProposal message, length delimited. Does not implicitly {@link tendermint.types.CanonicalProposal.verify|verify} messages.
             * @param message CanonicalProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICanonicalProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanonicalProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanonicalProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.CanonicalProposal;

            /**
             * Decodes a CanonicalProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanonicalProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.CanonicalProposal;

            /**
             * Verifies a CanonicalProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanonicalProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanonicalProposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.CanonicalProposal;

            /**
             * Creates a plain object from a CanonicalProposal message. Also converts values to other types if specified.
             * @param message CanonicalProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.CanonicalProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanonicalProposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CanonicalVote. */
        interface ICanonicalVote {

            /** CanonicalVote type */
            type?: (tendermint.types.SignedMsgType|null);

            /** CanonicalVote height */
            height?: (number|Long|null);

            /** CanonicalVote round */
            round?: (number|Long|null);

            /** CanonicalVote blockId */
            blockId?: (tendermint.types.ICanonicalBlockID|null);

            /** CanonicalVote timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** CanonicalVote chainId */
            chainId?: (string|null);
        }

        /** Represents a CanonicalVote. */
        class CanonicalVote implements ICanonicalVote {

            /**
             * Constructs a new CanonicalVote.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICanonicalVote);

            /** CanonicalVote type. */
            public type: tendermint.types.SignedMsgType;

            /** CanonicalVote height. */
            public height: (number|Long);

            /** CanonicalVote round. */
            public round: (number|Long);

            /** CanonicalVote blockId. */
            public blockId?: (tendermint.types.ICanonicalBlockID|null);

            /** CanonicalVote timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** CanonicalVote chainId. */
            public chainId: string;

            /**
             * Creates a new CanonicalVote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanonicalVote instance
             */
            public static create(properties?: tendermint.types.ICanonicalVote): tendermint.types.CanonicalVote;

            /**
             * Encodes the specified CanonicalVote message. Does not implicitly {@link tendermint.types.CanonicalVote.verify|verify} messages.
             * @param message CanonicalVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICanonicalVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanonicalVote message, length delimited. Does not implicitly {@link tendermint.types.CanonicalVote.verify|verify} messages.
             * @param message CanonicalVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICanonicalVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanonicalVote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanonicalVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.CanonicalVote;

            /**
             * Decodes a CanonicalVote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanonicalVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.CanonicalVote;

            /**
             * Verifies a CanonicalVote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanonicalVote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanonicalVote
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.CanonicalVote;

            /**
             * Creates a plain object from a CanonicalVote message. Also converts values to other types if specified.
             * @param message CanonicalVote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.CanonicalVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanonicalVote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EventDataRoundState. */
        interface IEventDataRoundState {

            /** EventDataRoundState height */
            height?: (number|Long|null);

            /** EventDataRoundState round */
            round?: (number|null);

            /** EventDataRoundState step */
            step?: (string|null);
        }

        /** Represents an EventDataRoundState. */
        class EventDataRoundState implements IEventDataRoundState {

            /**
             * Constructs a new EventDataRoundState.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEventDataRoundState);

            /** EventDataRoundState height. */
            public height: (number|Long);

            /** EventDataRoundState round. */
            public round: number;

            /** EventDataRoundState step. */
            public step: string;

            /**
             * Creates a new EventDataRoundState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EventDataRoundState instance
             */
            public static create(properties?: tendermint.types.IEventDataRoundState): tendermint.types.EventDataRoundState;

            /**
             * Encodes the specified EventDataRoundState message. Does not implicitly {@link tendermint.types.EventDataRoundState.verify|verify} messages.
             * @param message EventDataRoundState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEventDataRoundState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EventDataRoundState message, length delimited. Does not implicitly {@link tendermint.types.EventDataRoundState.verify|verify} messages.
             * @param message EventDataRoundState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEventDataRoundState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventDataRoundState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventDataRoundState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.EventDataRoundState;

            /**
             * Decodes an EventDataRoundState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EventDataRoundState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.EventDataRoundState;

            /**
             * Verifies an EventDataRoundState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EventDataRoundState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EventDataRoundState
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.EventDataRoundState;

            /**
             * Creates a plain object from an EventDataRoundState message. Also converts values to other types if specified.
             * @param message EventDataRoundState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.EventDataRoundState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EventDataRoundState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Evidence. */
        interface IEvidence {

            /** Evidence duplicateVoteEvidence */
            duplicateVoteEvidence?: (tendermint.types.IDuplicateVoteEvidence|null);

            /** Evidence lightClientAttackEvidence */
            lightClientAttackEvidence?: (tendermint.types.ILightClientAttackEvidence|null);
        }

        /** Represents an Evidence. */
        class Evidence implements IEvidence {

            /**
             * Constructs a new Evidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEvidence);

            /** Evidence duplicateVoteEvidence. */
            public duplicateVoteEvidence?: (tendermint.types.IDuplicateVoteEvidence|null);

            /** Evidence lightClientAttackEvidence. */
            public lightClientAttackEvidence?: (tendermint.types.ILightClientAttackEvidence|null);

            /** Evidence sum. */
            public sum?: ("duplicateVoteEvidence"|"lightClientAttackEvidence");

            /**
             * Creates a new Evidence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Evidence instance
             */
            public static create(properties?: tendermint.types.IEvidence): tendermint.types.Evidence;

            /**
             * Encodes the specified Evidence message. Does not implicitly {@link tendermint.types.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Evidence message, length delimited. Does not implicitly {@link tendermint.types.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Evidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Evidence;

            /**
             * Decodes an Evidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Evidence;

            /**
             * Verifies an Evidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Evidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Evidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Evidence;

            /**
             * Creates a plain object from an Evidence message. Also converts values to other types if specified.
             * @param message Evidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Evidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Evidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DuplicateVoteEvidence. */
        interface IDuplicateVoteEvidence {

            /** DuplicateVoteEvidence voteA */
            voteA?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence voteB */
            voteB?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence totalVotingPower */
            totalVotingPower?: (number|Long|null);

            /** DuplicateVoteEvidence validatorPower */
            validatorPower?: (number|Long|null);

            /** DuplicateVoteEvidence timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a DuplicateVoteEvidence. */
        class DuplicateVoteEvidence implements IDuplicateVoteEvidence {

            /**
             * Constructs a new DuplicateVoteEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IDuplicateVoteEvidence);

            /** DuplicateVoteEvidence voteA. */
            public voteA?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence voteB. */
            public voteB?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence totalVotingPower. */
            public totalVotingPower: (number|Long);

            /** DuplicateVoteEvidence validatorPower. */
            public validatorPower: (number|Long);

            /** DuplicateVoteEvidence timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new DuplicateVoteEvidence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DuplicateVoteEvidence instance
             */
            public static create(properties?: tendermint.types.IDuplicateVoteEvidence): tendermint.types.DuplicateVoteEvidence;

            /**
             * Encodes the specified DuplicateVoteEvidence message. Does not implicitly {@link tendermint.types.DuplicateVoteEvidence.verify|verify} messages.
             * @param message DuplicateVoteEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IDuplicateVoteEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DuplicateVoteEvidence message, length delimited. Does not implicitly {@link tendermint.types.DuplicateVoteEvidence.verify|verify} messages.
             * @param message DuplicateVoteEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IDuplicateVoteEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DuplicateVoteEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DuplicateVoteEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.DuplicateVoteEvidence;

            /**
             * Decodes a DuplicateVoteEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DuplicateVoteEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.DuplicateVoteEvidence;

            /**
             * Verifies a DuplicateVoteEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DuplicateVoteEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DuplicateVoteEvidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.DuplicateVoteEvidence;

            /**
             * Creates a plain object from a DuplicateVoteEvidence message. Also converts values to other types if specified.
             * @param message DuplicateVoteEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.DuplicateVoteEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DuplicateVoteEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LightClientAttackEvidence. */
        interface ILightClientAttackEvidence {

            /** LightClientAttackEvidence conflictingBlock */
            conflictingBlock?: (tendermint.types.ILightBlock|null);

            /** LightClientAttackEvidence commonHeight */
            commonHeight?: (number|Long|null);

            /** LightClientAttackEvidence byzantineValidators */
            byzantineValidators?: (tendermint.types.IValidator[]|null);

            /** LightClientAttackEvidence totalVotingPower */
            totalVotingPower?: (number|Long|null);

            /** LightClientAttackEvidence timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a LightClientAttackEvidence. */
        class LightClientAttackEvidence implements ILightClientAttackEvidence {

            /**
             * Constructs a new LightClientAttackEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ILightClientAttackEvidence);

            /** LightClientAttackEvidence conflictingBlock. */
            public conflictingBlock?: (tendermint.types.ILightBlock|null);

            /** LightClientAttackEvidence commonHeight. */
            public commonHeight: (number|Long);

            /** LightClientAttackEvidence byzantineValidators. */
            public byzantineValidators: tendermint.types.IValidator[];

            /** LightClientAttackEvidence totalVotingPower. */
            public totalVotingPower: (number|Long);

            /** LightClientAttackEvidence timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new LightClientAttackEvidence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LightClientAttackEvidence instance
             */
            public static create(properties?: tendermint.types.ILightClientAttackEvidence): tendermint.types.LightClientAttackEvidence;

            /**
             * Encodes the specified LightClientAttackEvidence message. Does not implicitly {@link tendermint.types.LightClientAttackEvidence.verify|verify} messages.
             * @param message LightClientAttackEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ILightClientAttackEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LightClientAttackEvidence message, length delimited. Does not implicitly {@link tendermint.types.LightClientAttackEvidence.verify|verify} messages.
             * @param message LightClientAttackEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ILightClientAttackEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LightClientAttackEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LightClientAttackEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.LightClientAttackEvidence;

            /**
             * Decodes a LightClientAttackEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LightClientAttackEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.LightClientAttackEvidence;

            /**
             * Verifies a LightClientAttackEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LightClientAttackEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LightClientAttackEvidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.LightClientAttackEvidence;

            /**
             * Creates a plain object from a LightClientAttackEvidence message. Also converts values to other types if specified.
             * @param message LightClientAttackEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.LightClientAttackEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LightClientAttackEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EvidenceList. */
        interface IEvidenceList {

            /** EvidenceList evidence */
            evidence?: (tendermint.types.IEvidence[]|null);
        }

        /** Represents an EvidenceList. */
        class EvidenceList implements IEvidenceList {

            /**
             * Constructs a new EvidenceList.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEvidenceList);

            /** EvidenceList evidence. */
            public evidence: tendermint.types.IEvidence[];

            /**
             * Creates a new EvidenceList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EvidenceList instance
             */
            public static create(properties?: tendermint.types.IEvidenceList): tendermint.types.EvidenceList;

            /**
             * Encodes the specified EvidenceList message. Does not implicitly {@link tendermint.types.EvidenceList.verify|verify} messages.
             * @param message EvidenceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEvidenceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EvidenceList message, length delimited. Does not implicitly {@link tendermint.types.EvidenceList.verify|verify} messages.
             * @param message EvidenceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEvidenceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EvidenceList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EvidenceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.EvidenceList;

            /**
             * Decodes an EvidenceList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EvidenceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.EvidenceList;

            /**
             * Verifies an EvidenceList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EvidenceList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EvidenceList
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.EvidenceList;

            /**
             * Creates a plain object from an EvidenceList message. Also converts values to other types if specified.
             * @param message EvidenceList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.EvidenceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EvidenceList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConsensusParams. */
        interface IConsensusParams {

            /** ConsensusParams block */
            block?: (tendermint.types.IBlockParams|null);

            /** ConsensusParams evidence */
            evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator */
            validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version */
            version?: (tendermint.types.IVersionParams|null);
        }

        /** Represents a ConsensusParams. */
        class ConsensusParams implements IConsensusParams {

            /**
             * Constructs a new ConsensusParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IConsensusParams);

            /** ConsensusParams block. */
            public block?: (tendermint.types.IBlockParams|null);

            /** ConsensusParams evidence. */
            public evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator. */
            public validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version. */
            public version?: (tendermint.types.IVersionParams|null);

            /**
             * Creates a new ConsensusParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsensusParams instance
             */
            public static create(properties?: tendermint.types.IConsensusParams): tendermint.types.ConsensusParams;

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ConsensusParams;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ConsensusParams;

            /**
             * Verifies a ConsensusParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsensusParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ConsensusParams;

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @param message ConsensusParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ConsensusParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsensusParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockParams. */
        interface IBlockParams {

            /** BlockParams maxBytes */
            maxBytes?: (number|Long|null);

            /** BlockParams maxGas */
            maxGas?: (number|Long|null);

            /** BlockParams timeIotaMs */
            timeIotaMs?: (number|Long|null);
        }

        /** Represents a BlockParams. */
        class BlockParams implements IBlockParams {

            /**
             * Constructs a new BlockParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockParams);

            /** BlockParams maxBytes. */
            public maxBytes: (number|Long);

            /** BlockParams maxGas. */
            public maxGas: (number|Long);

            /** BlockParams timeIotaMs. */
            public timeIotaMs: (number|Long);

            /**
             * Creates a new BlockParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockParams instance
             */
            public static create(properties?: tendermint.types.IBlockParams): tendermint.types.BlockParams;

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockParams;

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockParams;

            /**
             * Verifies a BlockParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockParams;

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @param message BlockParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EvidenceParams. */
        interface IEvidenceParams {

            /** EvidenceParams maxAgeNumBlocks */
            maxAgeNumBlocks?: (number|Long|null);

            /** EvidenceParams maxAgeDuration */
            maxAgeDuration?: (google.protobuf.IDuration|null);

            /** EvidenceParams maxBytes */
            maxBytes?: (number|Long|null);
        }

        /** Represents an EvidenceParams. */
        class EvidenceParams implements IEvidenceParams {

            /**
             * Constructs a new EvidenceParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEvidenceParams);

            /** EvidenceParams maxAgeNumBlocks. */
            public maxAgeNumBlocks: (number|Long);

            /** EvidenceParams maxAgeDuration. */
            public maxAgeDuration?: (google.protobuf.IDuration|null);

            /** EvidenceParams maxBytes. */
            public maxBytes: (number|Long);

            /**
             * Creates a new EvidenceParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EvidenceParams instance
             */
            public static create(properties?: tendermint.types.IEvidenceParams): tendermint.types.EvidenceParams;

            /**
             * Encodes the specified EvidenceParams message. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @param message EvidenceParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EvidenceParams message, length delimited. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @param message EvidenceParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.EvidenceParams;

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.EvidenceParams;

            /**
             * Verifies an EvidenceParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EvidenceParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EvidenceParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.EvidenceParams;

            /**
             * Creates a plain object from an EvidenceParams message. Also converts values to other types if specified.
             * @param message EvidenceParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.EvidenceParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EvidenceParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorParams. */
        interface IValidatorParams {

            /** ValidatorParams pubKeyTypes */
            pubKeyTypes?: (string[]|null);
        }

        /** Represents a ValidatorParams. */
        class ValidatorParams implements IValidatorParams {

            /**
             * Constructs a new ValidatorParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IValidatorParams);

            /** ValidatorParams pubKeyTypes. */
            public pubKeyTypes: string[];

            /**
             * Creates a new ValidatorParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorParams instance
             */
            public static create(properties?: tendermint.types.IValidatorParams): tendermint.types.ValidatorParams;

            /**
             * Encodes the specified ValidatorParams message. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @param message ValidatorParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorParams message, length delimited. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @param message ValidatorParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ValidatorParams;

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ValidatorParams;

            /**
             * Verifies a ValidatorParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ValidatorParams;

            /**
             * Creates a plain object from a ValidatorParams message. Also converts values to other types if specified.
             * @param message ValidatorParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ValidatorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VersionParams. */
        interface IVersionParams {

            /** VersionParams appVersion */
            appVersion?: (number|Long|null);
        }

        /** Represents a VersionParams. */
        class VersionParams implements IVersionParams {

            /**
             * Constructs a new VersionParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IVersionParams);

            /** VersionParams appVersion. */
            public appVersion: (number|Long);

            /**
             * Creates a new VersionParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VersionParams instance
             */
            public static create(properties?: tendermint.types.IVersionParams): tendermint.types.VersionParams;

            /**
             * Encodes the specified VersionParams message. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @param message VersionParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IVersionParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VersionParams message, length delimited. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @param message VersionParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IVersionParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VersionParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.VersionParams;

            /**
             * Decodes a VersionParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.VersionParams;

            /**
             * Verifies a VersionParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VersionParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VersionParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.VersionParams;

            /**
             * Creates a plain object from a VersionParams message. Also converts values to other types if specified.
             * @param message VersionParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.VersionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VersionParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HashedParams. */
        interface IHashedParams {

            /** HashedParams blockMaxBytes */
            blockMaxBytes?: (number|Long|null);

            /** HashedParams blockMaxGas */
            blockMaxGas?: (number|Long|null);
        }

        /** Represents a HashedParams. */
        class HashedParams implements IHashedParams {

            /**
             * Constructs a new HashedParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IHashedParams);

            /** HashedParams blockMaxBytes. */
            public blockMaxBytes: (number|Long);

            /** HashedParams blockMaxGas. */
            public blockMaxGas: (number|Long);

            /**
             * Creates a new HashedParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HashedParams instance
             */
            public static create(properties?: tendermint.types.IHashedParams): tendermint.types.HashedParams;

            /**
             * Encodes the specified HashedParams message. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @param message HashedParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IHashedParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HashedParams message, length delimited. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @param message HashedParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IHashedParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HashedParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.HashedParams;

            /**
             * Decodes a HashedParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.HashedParams;

            /**
             * Verifies a HashedParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HashedParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HashedParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.HashedParams;

            /**
             * Creates a plain object from a HashedParams message. Also converts values to other types if specified.
             * @param message HashedParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.HashedParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HashedParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** BlockIDFlag enum. */
        enum BlockIDFlag {
            BLOCK_ID_FLAG_UNKNOWN = 0,
            BLOCK_ID_FLAG_ABSENT = 1,
            BLOCK_ID_FLAG_COMMIT = 2,
            BLOCK_ID_FLAG_NIL = 3
        }

        /** SignedMsgType enum. */
        enum SignedMsgType {
            SIGNED_MSG_TYPE_UNKNOWN = 0,
            SIGNED_MSG_TYPE_PREVOTE = 1,
            SIGNED_MSG_TYPE_PRECOMMIT = 2,
            SIGNED_MSG_TYPE_PROPOSAL = 32
        }

        /** Properties of a PartSetHeader. */
        interface IPartSetHeader {

            /** PartSetHeader total */
            total?: (number|null);

            /** PartSetHeader hash */
            hash?: (Uint8Array|null);
        }

        /** Represents a PartSetHeader. */
        class PartSetHeader implements IPartSetHeader {

            /**
             * Constructs a new PartSetHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IPartSetHeader);

            /** PartSetHeader total. */
            public total: number;

            /** PartSetHeader hash. */
            public hash: Uint8Array;

            /**
             * Creates a new PartSetHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartSetHeader instance
             */
            public static create(properties?: tendermint.types.IPartSetHeader): tendermint.types.PartSetHeader;

            /**
             * Encodes the specified PartSetHeader message. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @param message PartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartSetHeader message, length delimited. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @param message PartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.PartSetHeader;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.PartSetHeader;

            /**
             * Verifies a PartSetHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartSetHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartSetHeader
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.PartSetHeader;

            /**
             * Creates a plain object from a PartSetHeader message. Also converts values to other types if specified.
             * @param message PartSetHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.PartSetHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartSetHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Part. */
        interface IPart {

            /** Part index */
            index?: (number|null);

            /** Part bytes */
            bytes?: (Uint8Array|null);

            /** Part proof */
            proof?: (tendermint.crypto.IProof|null);
        }

        /** Represents a Part. */
        class Part implements IPart {

            /**
             * Constructs a new Part.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IPart);

            /** Part index. */
            public index: number;

            /** Part bytes. */
            public bytes: Uint8Array;

            /** Part proof. */
            public proof?: (tendermint.crypto.IProof|null);

            /**
             * Creates a new Part instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Part instance
             */
            public static create(properties?: tendermint.types.IPart): tendermint.types.Part;

            /**
             * Encodes the specified Part message. Does not implicitly {@link tendermint.types.Part.verify|verify} messages.
             * @param message Part message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Part message, length delimited. Does not implicitly {@link tendermint.types.Part.verify|verify} messages.
             * @param message Part message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Part message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Part
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Part;

            /**
             * Decodes a Part message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Part
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Part;

            /**
             * Verifies a Part message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Part message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Part
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Part;

            /**
             * Creates a plain object from a Part message. Also converts values to other types if specified.
             * @param message Part
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Part, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Part to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockID. */
        interface IBlockID {

            /** BlockID hash */
            hash?: (Uint8Array|null);

            /** BlockID partSetHeader */
            partSetHeader?: (tendermint.types.IPartSetHeader|null);
        }

        /** Represents a BlockID. */
        class BlockID implements IBlockID {

            /**
             * Constructs a new BlockID.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockID);

            /** BlockID hash. */
            public hash: Uint8Array;

            /** BlockID partSetHeader. */
            public partSetHeader?: (tendermint.types.IPartSetHeader|null);

            /**
             * Creates a new BlockID instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockID instance
             */
            public static create(properties?: tendermint.types.IBlockID): tendermint.types.BlockID;

            /**
             * Encodes the specified BlockID message. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @param message BlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockID message, length delimited. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @param message BlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockID;

            /**
             * Decodes a BlockID message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockID;

            /**
             * Verifies a BlockID message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockID message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockID
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockID;

            /**
             * Creates a plain object from a BlockID message. Also converts values to other types if specified.
             * @param message BlockID
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockID, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockID to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Header. */
        interface IHeader {

            /** Header version */
            version?: (tendermint.version.IConsensus|null);

            /** Header chainId */
            chainId?: (string|null);

            /** Header height */
            height?: (number|Long|null);

            /** Header time */
            time?: (google.protobuf.ITimestamp|null);

            /** Header lastBlockId */
            lastBlockId?: (tendermint.types.IBlockID|null);

            /** Header lastCommitHash */
            lastCommitHash?: (Uint8Array|null);

            /** Header dataHash */
            dataHash?: (Uint8Array|null);

            /** Header validatorsHash */
            validatorsHash?: (Uint8Array|null);

            /** Header nextValidatorsHash */
            nextValidatorsHash?: (Uint8Array|null);

            /** Header consensusHash */
            consensusHash?: (Uint8Array|null);

            /** Header appHash */
            appHash?: (Uint8Array|null);

            /** Header lastResultsHash */
            lastResultsHash?: (Uint8Array|null);

            /** Header evidenceHash */
            evidenceHash?: (Uint8Array|null);

            /** Header proposerAddress */
            proposerAddress?: (Uint8Array|null);
        }

        /** Represents a Header. */
        class Header implements IHeader {

            /**
             * Constructs a new Header.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IHeader);

            /** Header version. */
            public version?: (tendermint.version.IConsensus|null);

            /** Header chainId. */
            public chainId: string;

            /** Header height. */
            public height: (number|Long);

            /** Header time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** Header lastBlockId. */
            public lastBlockId?: (tendermint.types.IBlockID|null);

            /** Header lastCommitHash. */
            public lastCommitHash: Uint8Array;

            /** Header dataHash. */
            public dataHash: Uint8Array;

            /** Header validatorsHash. */
            public validatorsHash: Uint8Array;

            /** Header nextValidatorsHash. */
            public nextValidatorsHash: Uint8Array;

            /** Header consensusHash. */
            public consensusHash: Uint8Array;

            /** Header appHash. */
            public appHash: Uint8Array;

            /** Header lastResultsHash. */
            public lastResultsHash: Uint8Array;

            /** Header evidenceHash. */
            public evidenceHash: Uint8Array;

            /** Header proposerAddress. */
            public proposerAddress: Uint8Array;

            /**
             * Creates a new Header instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Header instance
             */
            public static create(properties?: tendermint.types.IHeader): tendermint.types.Header;

            /**
             * Encodes the specified Header message. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Header;

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Header;

            /**
             * Verifies a Header message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Header
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Header;

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @param message Header
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Header to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Data. */
        interface IData {

            /** Data txs */
            txs?: (Uint8Array[]|null);
        }

        /** Represents a Data. */
        class Data implements IData {

            /**
             * Constructs a new Data.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IData);

            /** Data txs. */
            public txs: Uint8Array[];

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(properties?: tendermint.types.IData): tendermint.types.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link tendermint.types.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Data message, length delimited. Does not implicitly {@link tendermint.types.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Data;

            /**
             * Decodes a Data message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Data;

            /**
             * Verifies a Data message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Data message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Data
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Data;

            /**
             * Creates a plain object from a Data message. Also converts values to other types if specified.
             * @param message Data
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Data to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vote. */
        interface IVote {

            /** Vote type */
            type?: (tendermint.types.SignedMsgType|null);

            /** Vote height */
            height?: (number|Long|null);

            /** Vote round */
            round?: (number|null);

            /** Vote blockId */
            blockId?: (tendermint.types.IBlockID|null);

            /** Vote timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** Vote validatorAddress */
            validatorAddress?: (Uint8Array|null);

            /** Vote validatorIndex */
            validatorIndex?: (number|null);

            /** Vote signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a Vote. */
        class Vote implements IVote {

            /**
             * Constructs a new Vote.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IVote);

            /** Vote type. */
            public type: tendermint.types.SignedMsgType;

            /** Vote height. */
            public height: (number|Long);

            /** Vote round. */
            public round: number;

            /** Vote blockId. */
            public blockId?: (tendermint.types.IBlockID|null);

            /** Vote timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** Vote validatorAddress. */
            public validatorAddress: Uint8Array;

            /** Vote validatorIndex. */
            public validatorIndex: number;

            /** Vote signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Vote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vote instance
             */
            public static create(properties?: tendermint.types.IVote): tendermint.types.Vote;

            /**
             * Encodes the specified Vote message. Does not implicitly {@link tendermint.types.Vote.verify|verify} messages.
             * @param message Vote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vote message, length delimited. Does not implicitly {@link tendermint.types.Vote.verify|verify} messages.
             * @param message Vote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Vote;

            /**
             * Decodes a Vote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Vote;

            /**
             * Verifies a Vote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vote
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Vote;

            /**
             * Creates a plain object from a Vote message. Also converts values to other types if specified.
             * @param message Vote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Vote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Commit. */
        interface ICommit {

            /** Commit height */
            height?: (number|Long|null);

            /** Commit round */
            round?: (number|null);

            /** Commit blockId */
            blockId?: (tendermint.types.IBlockID|null);

            /** Commit signatures */
            signatures?: (tendermint.types.ICommitSig[]|null);
        }

        /** Represents a Commit. */
        class Commit implements ICommit {

            /**
             * Constructs a new Commit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICommit);

            /** Commit height. */
            public height: (number|Long);

            /** Commit round. */
            public round: number;

            /** Commit blockId. */
            public blockId?: (tendermint.types.IBlockID|null);

            /** Commit signatures. */
            public signatures: tendermint.types.ICommitSig[];

            /**
             * Creates a new Commit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Commit instance
             */
            public static create(properties?: tendermint.types.ICommit): tendermint.types.Commit;

            /**
             * Encodes the specified Commit message. Does not implicitly {@link tendermint.types.Commit.verify|verify} messages.
             * @param message Commit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Commit message, length delimited. Does not implicitly {@link tendermint.types.Commit.verify|verify} messages.
             * @param message Commit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Commit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Commit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Commit;

            /**
             * Decodes a Commit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Commit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Commit;

            /**
             * Verifies a Commit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Commit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Commit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Commit;

            /**
             * Creates a plain object from a Commit message. Also converts values to other types if specified.
             * @param message Commit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Commit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Commit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CommitSig. */
        interface ICommitSig {

            /** CommitSig blockIdFlag */
            blockIdFlag?: (tendermint.types.BlockIDFlag|null);

            /** CommitSig validatorAddress */
            validatorAddress?: (Uint8Array|null);

            /** CommitSig timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** CommitSig signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a CommitSig. */
        class CommitSig implements ICommitSig {

            /**
             * Constructs a new CommitSig.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICommitSig);

            /** CommitSig blockIdFlag. */
            public blockIdFlag: tendermint.types.BlockIDFlag;

            /** CommitSig validatorAddress. */
            public validatorAddress: Uint8Array;

            /** CommitSig timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** CommitSig signature. */
            public signature: Uint8Array;

            /**
             * Creates a new CommitSig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommitSig instance
             */
            public static create(properties?: tendermint.types.ICommitSig): tendermint.types.CommitSig;

            /**
             * Encodes the specified CommitSig message. Does not implicitly {@link tendermint.types.CommitSig.verify|verify} messages.
             * @param message CommitSig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICommitSig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommitSig message, length delimited. Does not implicitly {@link tendermint.types.CommitSig.verify|verify} messages.
             * @param message CommitSig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICommitSig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitSig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommitSig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.CommitSig;

            /**
             * Decodes a CommitSig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommitSig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.CommitSig;

            /**
             * Verifies a CommitSig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommitSig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommitSig
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.CommitSig;

            /**
             * Creates a plain object from a CommitSig message. Also converts values to other types if specified.
             * @param message CommitSig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.CommitSig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommitSig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Proposal. */
        interface IProposal {

            /** Proposal type */
            type?: (tendermint.types.SignedMsgType|null);

            /** Proposal height */
            height?: (number|Long|null);

            /** Proposal round */
            round?: (number|null);

            /** Proposal polRound */
            polRound?: (number|null);

            /** Proposal blockId */
            blockId?: (tendermint.types.IBlockID|null);

            /** Proposal timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** Proposal signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a Proposal. */
        class Proposal implements IProposal {

            /**
             * Constructs a new Proposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IProposal);

            /** Proposal type. */
            public type: tendermint.types.SignedMsgType;

            /** Proposal height. */
            public height: (number|Long);

            /** Proposal round. */
            public round: number;

            /** Proposal polRound. */
            public polRound: number;

            /** Proposal blockId. */
            public blockId?: (tendermint.types.IBlockID|null);

            /** Proposal timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** Proposal signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Proposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Proposal instance
             */
            public static create(properties?: tendermint.types.IProposal): tendermint.types.Proposal;

            /**
             * Encodes the specified Proposal message. Does not implicitly {@link tendermint.types.Proposal.verify|verify} messages.
             * @param message Proposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Proposal message, length delimited. Does not implicitly {@link tendermint.types.Proposal.verify|verify} messages.
             * @param message Proposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Proposal;

            /**
             * Decodes a Proposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Proposal;

            /**
             * Verifies a Proposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Proposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Proposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Proposal;

            /**
             * Creates a plain object from a Proposal message. Also converts values to other types if specified.
             * @param message Proposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Proposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Proposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignedHeader. */
        interface ISignedHeader {

            /** SignedHeader header */
            header?: (tendermint.types.IHeader|null);

            /** SignedHeader commit */
            commit?: (tendermint.types.ICommit|null);
        }

        /** Represents a SignedHeader. */
        class SignedHeader implements ISignedHeader {

            /**
             * Constructs a new SignedHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ISignedHeader);

            /** SignedHeader header. */
            public header?: (tendermint.types.IHeader|null);

            /** SignedHeader commit. */
            public commit?: (tendermint.types.ICommit|null);

            /**
             * Creates a new SignedHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedHeader instance
             */
            public static create(properties?: tendermint.types.ISignedHeader): tendermint.types.SignedHeader;

            /**
             * Encodes the specified SignedHeader message. Does not implicitly {@link tendermint.types.SignedHeader.verify|verify} messages.
             * @param message SignedHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ISignedHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignedHeader message, length delimited. Does not implicitly {@link tendermint.types.SignedHeader.verify|verify} messages.
             * @param message SignedHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ISignedHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.SignedHeader;

            /**
             * Decodes a SignedHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.SignedHeader;

            /**
             * Verifies a SignedHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignedHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignedHeader
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.SignedHeader;

            /**
             * Creates a plain object from a SignedHeader message. Also converts values to other types if specified.
             * @param message SignedHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.SignedHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignedHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LightBlock. */
        interface ILightBlock {

            /** LightBlock signedHeader */
            signedHeader?: (tendermint.types.ISignedHeader|null);

            /** LightBlock validatorSet */
            validatorSet?: (tendermint.types.IValidatorSet|null);
        }

        /** Represents a LightBlock. */
        class LightBlock implements ILightBlock {

            /**
             * Constructs a new LightBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ILightBlock);

            /** LightBlock signedHeader. */
            public signedHeader?: (tendermint.types.ISignedHeader|null);

            /** LightBlock validatorSet. */
            public validatorSet?: (tendermint.types.IValidatorSet|null);

            /**
             * Creates a new LightBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LightBlock instance
             */
            public static create(properties?: tendermint.types.ILightBlock): tendermint.types.LightBlock;

            /**
             * Encodes the specified LightBlock message. Does not implicitly {@link tendermint.types.LightBlock.verify|verify} messages.
             * @param message LightBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ILightBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LightBlock message, length delimited. Does not implicitly {@link tendermint.types.LightBlock.verify|verify} messages.
             * @param message LightBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ILightBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LightBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LightBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.LightBlock;

            /**
             * Decodes a LightBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LightBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.LightBlock;

            /**
             * Verifies a LightBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LightBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LightBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.LightBlock;

            /**
             * Creates a plain object from a LightBlock message. Also converts values to other types if specified.
             * @param message LightBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.LightBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LightBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockMeta. */
        interface IBlockMeta {

            /** BlockMeta blockId */
            blockId?: (tendermint.types.IBlockID|null);

            /** BlockMeta blockSize */
            blockSize?: (number|Long|null);

            /** BlockMeta header */
            header?: (tendermint.types.IHeader|null);

            /** BlockMeta numTxs */
            numTxs?: (number|Long|null);
        }

        /** Represents a BlockMeta. */
        class BlockMeta implements IBlockMeta {

            /**
             * Constructs a new BlockMeta.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockMeta);

            /** BlockMeta blockId. */
            public blockId?: (tendermint.types.IBlockID|null);

            /** BlockMeta blockSize. */
            public blockSize: (number|Long);

            /** BlockMeta header. */
            public header?: (tendermint.types.IHeader|null);

            /** BlockMeta numTxs. */
            public numTxs: (number|Long);

            /**
             * Creates a new BlockMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockMeta instance
             */
            public static create(properties?: tendermint.types.IBlockMeta): tendermint.types.BlockMeta;

            /**
             * Encodes the specified BlockMeta message. Does not implicitly {@link tendermint.types.BlockMeta.verify|verify} messages.
             * @param message BlockMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockMeta message, length delimited. Does not implicitly {@link tendermint.types.BlockMeta.verify|verify} messages.
             * @param message BlockMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockMeta message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockMeta;

            /**
             * Decodes a BlockMeta message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockMeta;

            /**
             * Verifies a BlockMeta message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockMeta message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockMeta
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockMeta;

            /**
             * Creates a plain object from a BlockMeta message. Also converts values to other types if specified.
             * @param message BlockMeta
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockMeta to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TxProof. */
        interface ITxProof {

            /** TxProof rootHash */
            rootHash?: (Uint8Array|null);

            /** TxProof data */
            data?: (Uint8Array|null);

            /** TxProof proof */
            proof?: (tendermint.crypto.IProof|null);
        }

        /** Represents a TxProof. */
        class TxProof implements ITxProof {

            /**
             * Constructs a new TxProof.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ITxProof);

            /** TxProof rootHash. */
            public rootHash: Uint8Array;

            /** TxProof data. */
            public data: Uint8Array;

            /** TxProof proof. */
            public proof?: (tendermint.crypto.IProof|null);

            /**
             * Creates a new TxProof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxProof instance
             */
            public static create(properties?: tendermint.types.ITxProof): tendermint.types.TxProof;

            /**
             * Encodes the specified TxProof message. Does not implicitly {@link tendermint.types.TxProof.verify|verify} messages.
             * @param message TxProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ITxProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxProof message, length delimited. Does not implicitly {@link tendermint.types.TxProof.verify|verify} messages.
             * @param message TxProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ITxProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxProof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.TxProof;

            /**
             * Decodes a TxProof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.TxProof;

            /**
             * Verifies a TxProof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxProof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxProof
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.TxProof;

            /**
             * Creates a plain object from a TxProof message. Also converts values to other types if specified.
             * @param message TxProof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.TxProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxProof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorSet. */
        interface IValidatorSet {

            /** ValidatorSet validators */
            validators?: (tendermint.types.IValidator[]|null);

            /** ValidatorSet proposer */
            proposer?: (tendermint.types.IValidator|null);

            /** ValidatorSet totalVotingPower */
            totalVotingPower?: (number|Long|null);
        }

        /** Represents a ValidatorSet. */
        class ValidatorSet implements IValidatorSet {

            /**
             * Constructs a new ValidatorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IValidatorSet);

            /** ValidatorSet validators. */
            public validators: tendermint.types.IValidator[];

            /** ValidatorSet proposer. */
            public proposer?: (tendermint.types.IValidator|null);

            /** ValidatorSet totalVotingPower. */
            public totalVotingPower: (number|Long);

            /**
             * Creates a new ValidatorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorSet instance
             */
            public static create(properties?: tendermint.types.IValidatorSet): tendermint.types.ValidatorSet;

            /**
             * Encodes the specified ValidatorSet message. Does not implicitly {@link tendermint.types.ValidatorSet.verify|verify} messages.
             * @param message ValidatorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IValidatorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorSet message, length delimited. Does not implicitly {@link tendermint.types.ValidatorSet.verify|verify} messages.
             * @param message ValidatorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IValidatorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ValidatorSet;

            /**
             * Decodes a ValidatorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ValidatorSet;

            /**
             * Verifies a ValidatorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorSet
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ValidatorSet;

            /**
             * Creates a plain object from a ValidatorSet message. Also converts values to other types if specified.
             * @param message ValidatorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ValidatorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Validator. */
        interface IValidator {

            /** Validator address */
            address?: (Uint8Array|null);

            /** Validator pubKey */
            pubKey?: (tendermint.crypto.IPublicKey|null);

            /** Validator votingPower */
            votingPower?: (number|Long|null);

            /** Validator proposerPriority */
            proposerPriority?: (number|Long|null);
        }

        /** Represents a Validator. */
        class Validator implements IValidator {

            /**
             * Constructs a new Validator.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IValidator);

            /** Validator address. */
            public address: Uint8Array;

            /** Validator pubKey. */
            public pubKey?: (tendermint.crypto.IPublicKey|null);

            /** Validator votingPower. */
            public votingPower: (number|Long);

            /** Validator proposerPriority. */
            public proposerPriority: (number|Long);

            /**
             * Creates a new Validator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validator instance
             */
            public static create(properties?: tendermint.types.IValidator): tendermint.types.Validator;

            /**
             * Encodes the specified Validator message. Does not implicitly {@link tendermint.types.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Validator message, length delimited. Does not implicitly {@link tendermint.types.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validator message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Validator;

            /**
             * Decodes a Validator message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Validator;

            /**
             * Verifies a Validator message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Validator message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Validator
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Validator;

            /**
             * Creates a plain object from a Validator message. Also converts values to other types if specified.
             * @param message Validator
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Validator, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Validator to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SimpleValidator. */
        interface ISimpleValidator {

            /** SimpleValidator pubKey */
            pubKey?: (tendermint.crypto.IPublicKey|null);

            /** SimpleValidator votingPower */
            votingPower?: (number|Long|null);
        }

        /** Represents a SimpleValidator. */
        class SimpleValidator implements ISimpleValidator {

            /**
             * Constructs a new SimpleValidator.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ISimpleValidator);

            /** SimpleValidator pubKey. */
            public pubKey?: (tendermint.crypto.IPublicKey|null);

            /** SimpleValidator votingPower. */
            public votingPower: (number|Long);

            /**
             * Creates a new SimpleValidator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SimpleValidator instance
             */
            public static create(properties?: tendermint.types.ISimpleValidator): tendermint.types.SimpleValidator;

            /**
             * Encodes the specified SimpleValidator message. Does not implicitly {@link tendermint.types.SimpleValidator.verify|verify} messages.
             * @param message SimpleValidator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ISimpleValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SimpleValidator message, length delimited. Does not implicitly {@link tendermint.types.SimpleValidator.verify|verify} messages.
             * @param message SimpleValidator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ISimpleValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SimpleValidator message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SimpleValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.SimpleValidator;

            /**
             * Decodes a SimpleValidator message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SimpleValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.SimpleValidator;

            /**
             * Verifies a SimpleValidator message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SimpleValidator message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SimpleValidator
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.SimpleValidator;

            /**
             * Creates a plain object from a SimpleValidator message. Also converts values to other types if specified.
             * @param message SimpleValidator
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.SimpleValidator, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SimpleValidator to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace version. */
    namespace version {

        /** Properties of an App. */
        interface IApp {

            /** App protocol */
            protocol?: (number|Long|null);

            /** App software */
            software?: (string|null);
        }

        /** Represents an App. */
        class App implements IApp {

            /**
             * Constructs a new App.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.version.IApp);

            /** App protocol. */
            public protocol: (number|Long);

            /** App software. */
            public software: string;

            /**
             * Creates a new App instance using the specified properties.
             * @param [properties] Properties to set
             * @returns App instance
             */
            public static create(properties?: tendermint.version.IApp): tendermint.version.App;

            /**
             * Encodes the specified App message. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @param message App message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.version.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified App message, length delimited. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @param message App message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.version.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an App message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.version.App;

            /**
             * Decodes an App message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.version.App;

            /**
             * Verifies an App message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an App message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns App
             */
            public static fromObject(object: { [k: string]: any }): tendermint.version.App;

            /**
             * Creates a plain object from an App message. Also converts values to other types if specified.
             * @param message App
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.version.App, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this App to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Consensus. */
        interface IConsensus {

            /** Consensus block */
            block?: (number|Long|null);

            /** Consensus app */
            app?: (number|Long|null);
        }

        /** Represents a Consensus. */
        class Consensus implements IConsensus {

            /**
             * Constructs a new Consensus.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.version.IConsensus);

            /** Consensus block. */
            public block: (number|Long);

            /** Consensus app. */
            public app: (number|Long);

            /**
             * Creates a new Consensus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Consensus instance
             */
            public static create(properties?: tendermint.version.IConsensus): tendermint.version.Consensus;

            /**
             * Encodes the specified Consensus message. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @param message Consensus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.version.IConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Consensus message, length delimited. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @param message Consensus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.version.IConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Consensus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.version.Consensus;

            /**
             * Decodes a Consensus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.version.Consensus;

            /**
             * Verifies a Consensus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Consensus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Consensus
             */
            public static fromObject(object: { [k: string]: any }): tendermint.version.Consensus;

            /**
             * Creates a plain object from a Consensus message. Also converts values to other types if specified.
             * @param message Consensus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.version.Consensus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Consensus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goprotoGettersAll */
            ".gogoproto.goprotoGettersAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoEnumPrefixAll */
            ".gogoproto.goprotoEnumPrefixAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoStringerAll */
            ".gogoproto.goprotoStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.verboseEqualAll */
            ".gogoproto.verboseEqualAll"?: (boolean|null);

            /** FileOptions .gogoproto.faceAll */
            ".gogoproto.faceAll"?: (boolean|null);

            /** FileOptions .gogoproto.gostringAll */
            ".gogoproto.gostringAll"?: (boolean|null);

            /** FileOptions .gogoproto.populateAll */
            ".gogoproto.populateAll"?: (boolean|null);

            /** FileOptions .gogoproto.stringerAll */
            ".gogoproto.stringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.onlyoneAll */
            ".gogoproto.onlyoneAll"?: (boolean|null);

            /** FileOptions .gogoproto.equalAll */
            ".gogoproto.equalAll"?: (boolean|null);

            /** FileOptions .gogoproto.descriptionAll */
            ".gogoproto.descriptionAll"?: (boolean|null);

            /** FileOptions .gogoproto.testgenAll */
            ".gogoproto.testgenAll"?: (boolean|null);

            /** FileOptions .gogoproto.benchgenAll */
            ".gogoproto.benchgenAll"?: (boolean|null);

            /** FileOptions .gogoproto.marshalerAll */
            ".gogoproto.marshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshalerAll */
            ".gogoproto.unmarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.stableMarshalerAll */
            ".gogoproto.stableMarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.sizerAll */
            ".gogoproto.sizerAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoEnumStringerAll */
            ".gogoproto.goprotoEnumStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.enumStringerAll */
            ".gogoproto.enumStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unsafeMarshalerAll */
            ".gogoproto.unsafeMarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unsafeUnmarshalerAll */
            ".gogoproto.unsafeUnmarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoExtensionsMapAll */
            ".gogoproto.goprotoExtensionsMapAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoUnrecognizedAll */
            ".gogoproto.goprotoUnrecognizedAll"?: (boolean|null);

            /** FileOptions .gogoproto.gogoprotoImport */
            ".gogoproto.gogoprotoImport"?: (boolean|null);

            /** FileOptions .gogoproto.protosizerAll */
            ".gogoproto.protosizerAll"?: (boolean|null);

            /** FileOptions .gogoproto.compareAll */
            ".gogoproto.compareAll"?: (boolean|null);

            /** FileOptions .gogoproto.typedeclAll */
            ".gogoproto.typedeclAll"?: (boolean|null);

            /** FileOptions .gogoproto.enumdeclAll */
            ".gogoproto.enumdeclAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoRegistration */
            ".gogoproto.goprotoRegistration"?: (boolean|null);

            /** FileOptions .gogoproto.messagenameAll */
            ".gogoproto.messagenameAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoSizecacheAll */
            ".gogoproto.goprotoSizecacheAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoUnkeyedAll */
            ".gogoproto.goprotoUnkeyedAll"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .gogoproto.goprotoGetters */
            ".gogoproto.goprotoGetters"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoStringer */
            ".gogoproto.goprotoStringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verboseEqual */
            ".gogoproto.verboseEqual"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stableMarshaler */
            ".gogoproto.stableMarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafeMarshaler */
            ".gogoproto.unsafeMarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafeUnmarshaler */
            ".gogoproto.unsafeUnmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoExtensionsMap */
            ".gogoproto.goprotoExtensionsMap"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoUnrecognized */
            ".gogoproto.goprotoUnrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoSizecache */
            ".gogoproto.goprotoSizecache"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoUnkeyed */
            ".gogoproto.goprotoUnkeyed"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);

            /** FieldOptions .gogoproto.wktpointer */
            ".gogoproto.wktpointer"?: (boolean|null);

            /** FieldOptions .gogoproto.castrepeated */
            ".gogoproto.castrepeated"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goprotoEnumPrefix */
            ".gogoproto.goprotoEnumPrefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goprotoEnumStringer */
            ".gogoproto.goprotoEnumStringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enumStringer */
            ".gogoproto.enumStringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enumCustomname */
            ".gogoproto.enumCustomname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalueCustomname */
            ".gogoproto.enumvalueCustomname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
