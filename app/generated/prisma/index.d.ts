
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cardapio
 * 
 */
export type Cardapio = $Result.DefaultSelection<Prisma.$CardapioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cardapios
 * const cardapios = await prisma.cardapio.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cardapios
   * const cardapios = await prisma.cardapio.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cardapio`: Exposes CRUD operations for the **Cardapio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cardapios
    * const cardapios = await prisma.cardapio.findMany()
    * ```
    */
  get cardapio(): Prisma.CardapioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cardapio: 'Cardapio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cardapio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cardapio: {
        payload: Prisma.$CardapioPayload<ExtArgs>
        fields: Prisma.CardapioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardapioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardapioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          findFirst: {
            args: Prisma.CardapioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardapioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          findMany: {
            args: Prisma.CardapioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>[]
          }
          create: {
            args: Prisma.CardapioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          createMany: {
            args: Prisma.CardapioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardapioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>[]
          }
          delete: {
            args: Prisma.CardapioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          update: {
            args: Prisma.CardapioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          deleteMany: {
            args: Prisma.CardapioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardapioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardapioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>[]
          }
          upsert: {
            args: Prisma.CardapioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          aggregate: {
            args: Prisma.CardapioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardapio>
          }
          groupBy: {
            args: Prisma.CardapioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardapioGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardapioCountArgs<ExtArgs>
            result: $Utils.Optional<CardapioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cardapio?: CardapioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Cardapio
   */

  export type AggregateCardapio = {
    _count: CardapioCountAggregateOutputType | null
    _avg: CardapioAvgAggregateOutputType | null
    _sum: CardapioSumAggregateOutputType | null
    _min: CardapioMinAggregateOutputType | null
    _max: CardapioMaxAggregateOutputType | null
  }

  export type CardapioAvgAggregateOutputType = {
    id: number | null
  }

  export type CardapioSumAggregateOutputType = {
    id: number | null
  }

  export type CardapioMinAggregateOutputType = {
    id: number | null
    diaSemana: string | null
    tipo: string | null
    pratoPrincipal: string | null
    acompanhamento: string | null
  }

  export type CardapioMaxAggregateOutputType = {
    id: number | null
    diaSemana: string | null
    tipo: string | null
    pratoPrincipal: string | null
    acompanhamento: string | null
  }

  export type CardapioCountAggregateOutputType = {
    id: number
    diaSemana: number
    tipo: number
    pratoPrincipal: number
    acompanhamento: number
    _all: number
  }


  export type CardapioAvgAggregateInputType = {
    id?: true
  }

  export type CardapioSumAggregateInputType = {
    id?: true
  }

  export type CardapioMinAggregateInputType = {
    id?: true
    diaSemana?: true
    tipo?: true
    pratoPrincipal?: true
    acompanhamento?: true
  }

  export type CardapioMaxAggregateInputType = {
    id?: true
    diaSemana?: true
    tipo?: true
    pratoPrincipal?: true
    acompanhamento?: true
  }

  export type CardapioCountAggregateInputType = {
    id?: true
    diaSemana?: true
    tipo?: true
    pratoPrincipal?: true
    acompanhamento?: true
    _all?: true
  }

  export type CardapioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cardapio to aggregate.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cardapios
    **/
    _count?: true | CardapioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardapioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardapioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardapioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardapioMaxAggregateInputType
  }

  export type GetCardapioAggregateType<T extends CardapioAggregateArgs> = {
        [P in keyof T & keyof AggregateCardapio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardapio[P]>
      : GetScalarType<T[P], AggregateCardapio[P]>
  }




  export type CardapioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardapioWhereInput
    orderBy?: CardapioOrderByWithAggregationInput | CardapioOrderByWithAggregationInput[]
    by: CardapioScalarFieldEnum[] | CardapioScalarFieldEnum
    having?: CardapioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardapioCountAggregateInputType | true
    _avg?: CardapioAvgAggregateInputType
    _sum?: CardapioSumAggregateInputType
    _min?: CardapioMinAggregateInputType
    _max?: CardapioMaxAggregateInputType
  }

  export type CardapioGroupByOutputType = {
    id: number
    diaSemana: string
    tipo: string
    pratoPrincipal: string
    acompanhamento: string
    _count: CardapioCountAggregateOutputType | null
    _avg: CardapioAvgAggregateOutputType | null
    _sum: CardapioSumAggregateOutputType | null
    _min: CardapioMinAggregateOutputType | null
    _max: CardapioMaxAggregateOutputType | null
  }

  type GetCardapioGroupByPayload<T extends CardapioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardapioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardapioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardapioGroupByOutputType[P]>
            : GetScalarType<T[P], CardapioGroupByOutputType[P]>
        }
      >
    >


  export type CardapioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    tipo?: boolean
    pratoPrincipal?: boolean
    acompanhamento?: boolean
  }, ExtArgs["result"]["cardapio"]>

  export type CardapioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    tipo?: boolean
    pratoPrincipal?: boolean
    acompanhamento?: boolean
  }, ExtArgs["result"]["cardapio"]>

  export type CardapioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    tipo?: boolean
    pratoPrincipal?: boolean
    acompanhamento?: boolean
  }, ExtArgs["result"]["cardapio"]>

  export type CardapioSelectScalar = {
    id?: boolean
    diaSemana?: boolean
    tipo?: boolean
    pratoPrincipal?: boolean
    acompanhamento?: boolean
  }

  export type CardapioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diaSemana" | "tipo" | "pratoPrincipal" | "acompanhamento", ExtArgs["result"]["cardapio"]>

  export type $CardapioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cardapio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diaSemana: string
      tipo: string
      pratoPrincipal: string
      acompanhamento: string
    }, ExtArgs["result"]["cardapio"]>
    composites: {}
  }

  type CardapioGetPayload<S extends boolean | null | undefined | CardapioDefaultArgs> = $Result.GetResult<Prisma.$CardapioPayload, S>

  type CardapioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardapioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardapioCountAggregateInputType | true
    }

  export interface CardapioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cardapio'], meta: { name: 'Cardapio' } }
    /**
     * Find zero or one Cardapio that matches the filter.
     * @param {CardapioFindUniqueArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardapioFindUniqueArgs>(args: SelectSubset<T, CardapioFindUniqueArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cardapio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardapioFindUniqueOrThrowArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardapioFindUniqueOrThrowArgs>(args: SelectSubset<T, CardapioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardapio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindFirstArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardapioFindFirstArgs>(args?: SelectSubset<T, CardapioFindFirstArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardapio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindFirstOrThrowArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardapioFindFirstOrThrowArgs>(args?: SelectSubset<T, CardapioFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cardapios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cardapios
     * const cardapios = await prisma.cardapio.findMany()
     * 
     * // Get first 10 Cardapios
     * const cardapios = await prisma.cardapio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardapioWithIdOnly = await prisma.cardapio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardapioFindManyArgs>(args?: SelectSubset<T, CardapioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cardapio.
     * @param {CardapioCreateArgs} args - Arguments to create a Cardapio.
     * @example
     * // Create one Cardapio
     * const Cardapio = await prisma.cardapio.create({
     *   data: {
     *     // ... data to create a Cardapio
     *   }
     * })
     * 
     */
    create<T extends CardapioCreateArgs>(args: SelectSubset<T, CardapioCreateArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cardapios.
     * @param {CardapioCreateManyArgs} args - Arguments to create many Cardapios.
     * @example
     * // Create many Cardapios
     * const cardapio = await prisma.cardapio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardapioCreateManyArgs>(args?: SelectSubset<T, CardapioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cardapios and returns the data saved in the database.
     * @param {CardapioCreateManyAndReturnArgs} args - Arguments to create many Cardapios.
     * @example
     * // Create many Cardapios
     * const cardapio = await prisma.cardapio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cardapios and only return the `id`
     * const cardapioWithIdOnly = await prisma.cardapio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardapioCreateManyAndReturnArgs>(args?: SelectSubset<T, CardapioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cardapio.
     * @param {CardapioDeleteArgs} args - Arguments to delete one Cardapio.
     * @example
     * // Delete one Cardapio
     * const Cardapio = await prisma.cardapio.delete({
     *   where: {
     *     // ... filter to delete one Cardapio
     *   }
     * })
     * 
     */
    delete<T extends CardapioDeleteArgs>(args: SelectSubset<T, CardapioDeleteArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cardapio.
     * @param {CardapioUpdateArgs} args - Arguments to update one Cardapio.
     * @example
     * // Update one Cardapio
     * const cardapio = await prisma.cardapio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardapioUpdateArgs>(args: SelectSubset<T, CardapioUpdateArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cardapios.
     * @param {CardapioDeleteManyArgs} args - Arguments to filter Cardapios to delete.
     * @example
     * // Delete a few Cardapios
     * const { count } = await prisma.cardapio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardapioDeleteManyArgs>(args?: SelectSubset<T, CardapioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cardapios
     * const cardapio = await prisma.cardapio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardapioUpdateManyArgs>(args: SelectSubset<T, CardapioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cardapios and returns the data updated in the database.
     * @param {CardapioUpdateManyAndReturnArgs} args - Arguments to update many Cardapios.
     * @example
     * // Update many Cardapios
     * const cardapio = await prisma.cardapio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cardapios and only return the `id`
     * const cardapioWithIdOnly = await prisma.cardapio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardapioUpdateManyAndReturnArgs>(args: SelectSubset<T, CardapioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cardapio.
     * @param {CardapioUpsertArgs} args - Arguments to update or create a Cardapio.
     * @example
     * // Update or create a Cardapio
     * const cardapio = await prisma.cardapio.upsert({
     *   create: {
     *     // ... data to create a Cardapio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cardapio we want to update
     *   }
     * })
     */
    upsert<T extends CardapioUpsertArgs>(args: SelectSubset<T, CardapioUpsertArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioCountArgs} args - Arguments to filter Cardapios to count.
     * @example
     * // Count the number of Cardapios
     * const count = await prisma.cardapio.count({
     *   where: {
     *     // ... the filter for the Cardapios we want to count
     *   }
     * })
    **/
    count<T extends CardapioCountArgs>(
      args?: Subset<T, CardapioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardapioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardapioAggregateArgs>(args: Subset<T, CardapioAggregateArgs>): Prisma.PrismaPromise<GetCardapioAggregateType<T>>

    /**
     * Group by Cardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardapioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardapioGroupByArgs['orderBy'] }
        : { orderBy?: CardapioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardapioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardapioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cardapio model
   */
  readonly fields: CardapioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cardapio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardapioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cardapio model
   */
  interface CardapioFieldRefs {
    readonly id: FieldRef<"Cardapio", 'Int'>
    readonly diaSemana: FieldRef<"Cardapio", 'String'>
    readonly tipo: FieldRef<"Cardapio", 'String'>
    readonly pratoPrincipal: FieldRef<"Cardapio", 'String'>
    readonly acompanhamento: FieldRef<"Cardapio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cardapio findUnique
   */
  export type CardapioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio findUniqueOrThrow
   */
  export type CardapioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio findFirst
   */
  export type CardapioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cardapios.
     */
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio findFirstOrThrow
   */
  export type CardapioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cardapios.
     */
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio findMany
   */
  export type CardapioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Filter, which Cardapios to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio create
   */
  export type CardapioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * The data needed to create a Cardapio.
     */
    data: XOR<CardapioCreateInput, CardapioUncheckedCreateInput>
  }

  /**
   * Cardapio createMany
   */
  export type CardapioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cardapios.
     */
    data: CardapioCreateManyInput | CardapioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cardapio createManyAndReturn
   */
  export type CardapioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * The data used to create many Cardapios.
     */
    data: CardapioCreateManyInput | CardapioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cardapio update
   */
  export type CardapioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * The data needed to update a Cardapio.
     */
    data: XOR<CardapioUpdateInput, CardapioUncheckedUpdateInput>
    /**
     * Choose, which Cardapio to update.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio updateMany
   */
  export type CardapioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cardapios.
     */
    data: XOR<CardapioUpdateManyMutationInput, CardapioUncheckedUpdateManyInput>
    /**
     * Filter which Cardapios to update
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to update.
     */
    limit?: number
  }

  /**
   * Cardapio updateManyAndReturn
   */
  export type CardapioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * The data used to update Cardapios.
     */
    data: XOR<CardapioUpdateManyMutationInput, CardapioUncheckedUpdateManyInput>
    /**
     * Filter which Cardapios to update
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to update.
     */
    limit?: number
  }

  /**
   * Cardapio upsert
   */
  export type CardapioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * The filter to search for the Cardapio to update in case it exists.
     */
    where: CardapioWhereUniqueInput
    /**
     * In case the Cardapio found by the `where` argument doesn't exist, create a new Cardapio with this data.
     */
    create: XOR<CardapioCreateInput, CardapioUncheckedCreateInput>
    /**
     * In case the Cardapio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardapioUpdateInput, CardapioUncheckedUpdateInput>
  }

  /**
   * Cardapio delete
   */
  export type CardapioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Filter which Cardapio to delete.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio deleteMany
   */
  export type CardapioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cardapios to delete
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to delete.
     */
    limit?: number
  }

  /**
   * Cardapio without action
   */
  export type CardapioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CardapioScalarFieldEnum: {
    id: 'id',
    diaSemana: 'diaSemana',
    tipo: 'tipo',
    pratoPrincipal: 'pratoPrincipal',
    acompanhamento: 'acompanhamento'
  };

  export type CardapioScalarFieldEnum = (typeof CardapioScalarFieldEnum)[keyof typeof CardapioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CardapioWhereInput = {
    AND?: CardapioWhereInput | CardapioWhereInput[]
    OR?: CardapioWhereInput[]
    NOT?: CardapioWhereInput | CardapioWhereInput[]
    id?: IntFilter<"Cardapio"> | number
    diaSemana?: StringFilter<"Cardapio"> | string
    tipo?: StringFilter<"Cardapio"> | string
    pratoPrincipal?: StringFilter<"Cardapio"> | string
    acompanhamento?: StringFilter<"Cardapio"> | string
  }

  export type CardapioOrderByWithRelationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    tipo?: SortOrder
    pratoPrincipal?: SortOrder
    acompanhamento?: SortOrder
  }

  export type CardapioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CardapioWhereInput | CardapioWhereInput[]
    OR?: CardapioWhereInput[]
    NOT?: CardapioWhereInput | CardapioWhereInput[]
    diaSemana?: StringFilter<"Cardapio"> | string
    tipo?: StringFilter<"Cardapio"> | string
    pratoPrincipal?: StringFilter<"Cardapio"> | string
    acompanhamento?: StringFilter<"Cardapio"> | string
  }, "id">

  export type CardapioOrderByWithAggregationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    tipo?: SortOrder
    pratoPrincipal?: SortOrder
    acompanhamento?: SortOrder
    _count?: CardapioCountOrderByAggregateInput
    _avg?: CardapioAvgOrderByAggregateInput
    _max?: CardapioMaxOrderByAggregateInput
    _min?: CardapioMinOrderByAggregateInput
    _sum?: CardapioSumOrderByAggregateInput
  }

  export type CardapioScalarWhereWithAggregatesInput = {
    AND?: CardapioScalarWhereWithAggregatesInput | CardapioScalarWhereWithAggregatesInput[]
    OR?: CardapioScalarWhereWithAggregatesInput[]
    NOT?: CardapioScalarWhereWithAggregatesInput | CardapioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cardapio"> | number
    diaSemana?: StringWithAggregatesFilter<"Cardapio"> | string
    tipo?: StringWithAggregatesFilter<"Cardapio"> | string
    pratoPrincipal?: StringWithAggregatesFilter<"Cardapio"> | string
    acompanhamento?: StringWithAggregatesFilter<"Cardapio"> | string
  }

  export type CardapioCreateInput = {
    diaSemana: string
    tipo: string
    pratoPrincipal: string
    acompanhamento: string
  }

  export type CardapioUncheckedCreateInput = {
    id?: number
    diaSemana: string
    tipo: string
    pratoPrincipal: string
    acompanhamento: string
  }

  export type CardapioUpdateInput = {
    diaSemana?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pratoPrincipal?: StringFieldUpdateOperationsInput | string
    acompanhamento?: StringFieldUpdateOperationsInput | string
  }

  export type CardapioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pratoPrincipal?: StringFieldUpdateOperationsInput | string
    acompanhamento?: StringFieldUpdateOperationsInput | string
  }

  export type CardapioCreateManyInput = {
    id?: number
    diaSemana: string
    tipo: string
    pratoPrincipal: string
    acompanhamento: string
  }

  export type CardapioUpdateManyMutationInput = {
    diaSemana?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pratoPrincipal?: StringFieldUpdateOperationsInput | string
    acompanhamento?: StringFieldUpdateOperationsInput | string
  }

  export type CardapioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pratoPrincipal?: StringFieldUpdateOperationsInput | string
    acompanhamento?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CardapioCountOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    tipo?: SortOrder
    pratoPrincipal?: SortOrder
    acompanhamento?: SortOrder
  }

  export type CardapioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CardapioMaxOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    tipo?: SortOrder
    pratoPrincipal?: SortOrder
    acompanhamento?: SortOrder
  }

  export type CardapioMinOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    tipo?: SortOrder
    pratoPrincipal?: SortOrder
    acompanhamento?: SortOrder
  }

  export type CardapioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}