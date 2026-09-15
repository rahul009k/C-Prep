window.ROADMAP=[
{id:"phase-01",phase:"Phase 01",title:"C# Fundamentals",icon:"🧱",weight:12,topics:[
{number:1,title:"Variables and constants",description:"Declarations, initialization, const and readonly basics.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const"},
{number:2,title:"Built-in data types",description:"Integral, floating-point, decimal, bool, char and string types.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types"},
{number:3,title:"var, object and dynamic",description:"Understand compile-time inference, boxing and runtime binding.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/var"},
{number:4,title:"Type conversion and casting",description:"Implicit, explicit, Convert, Parse, TryParse and pattern-based conversions.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions"},
{number:5,title:"Nullable value types",description:"Nullable<T>, ?, null checks and null-coalescing operators.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types"},
{number:6,title:"Strings and string interpolation",description:"String immutability, interpolation, formatting and common operations.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/"},
{number:7,title:"Arrays",description:"Single and multidimensional arrays, indexing and iteration.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays"},
{number:8,title:"Enums",description:"Enum declaration, underlying values, flags and parsing.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum"},
{number:9,title:"Structs",description:"Value-type semantics, constructors and when structs make sense.",priority:"should",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct"},
{number:10,title:"Operators",description:"Arithmetic, comparison, logical, null and conditional operators.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/"}
]},
{id:"phase-02",phase:"Phase 02",title:"Object-Oriented C#",icon:"🧩",weight:12,topics:[
{number:11,title:"Classes and objects",description:"Types, instances, fields, properties and methods.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/classes"},
{number:12,title:"Constructors",description:"Default, parameterized, static and constructor chaining.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors"},
{number:13,title:"Access modifiers",description:"public, private, protected, internal and protected internal.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers"},
{number:14,title:"Encapsulation",description:"Protect invariants using private state and controlled public APIs.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/classes"},
{number:15,title:"Inheritance",description:"Base and derived classes, protected members and reuse.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance"},
{number:16,title:"Polymorphism",description:"virtual, override, overload and runtime dispatch.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/polymorphism"},
{number:17,title:"Abstract classes",description:"Shared implementation plus abstract members for derived types.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract"},
{number:18,title:"Interfaces",description:"Contracts, multiple interface implementation and default members awareness.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces"},
{number:19,title:"Composition vs inheritance",description:"Know when to compose collaborators instead of building deep hierarchies.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice"},
{number:20,title:"sealed and override",description:"Control extension points and understand method dispatch.",priority:"should",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed"}
]},
{id:"phase-03",phase:"Phase 03",title:"Collections & Generics",icon:"📦",weight:11,topics:[
{number:21,title:"List<T>",description:"Dynamic collections, indexing, capacity and common operations.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1"},
{number:22,title:"Dictionary<TKey,TValue>",description:"Key-value lookup, hashing and common usage patterns.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2"},
{number:23,title:"HashSet<T>",description:"Uniqueness, set operations and lookup characteristics.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1"},
{number:24,title:"Queue and Stack",description:"FIFO and LIFO collection patterns.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/standard/collections/"},
{number:25,title:"IEnumerable<T>",description:"Iteration abstraction and how foreach consumes enumerables.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1"},
{number:26,title:"ICollection, IList and IReadOnlyCollection",description:"Choose collection interfaces based on the contract you need.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/standard/collections/"},
{number:27,title:"Generics",description:"Reusable strongly typed algorithms and collections.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics"},
{number:28,title:"Generic constraints",description:"where T : class, struct, new(), interface and base-type constraints.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters"},
{number:29,title:"Equality and GetHashCode",description:"Understand equality contracts, hashing and collection behavior.",priority:"must",weight:1.5,url:"https://learn.microsoft.com/en-us/dotnet/api/system.object.equals"}
]},
{id:"phase-04",phase:"Phase 04",title:"Delegates, Lambdas & Events",icon:"🎯",weight:9,topics:[
{number:30,title:"Delegates",description:"Type-safe references to methods and callback patterns.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/delegates-overview"},
{number:31,title:"Action, Func and Predicate",description:"Built-in delegate types used throughout modern .NET.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/api/system.action-1"},
{number:32,title:"Lambda expressions",description:"Expression and statement lambdas, parameters and return values.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions"},
{number:33,title:"Closures",description:"How lambdas capture variables and the allocation implications.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions"},
{number:34,title:"Events",description:"Publisher/subscriber model and event handlers.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/events-overview"},
{number:35,title:"Anonymous methods",description:"Legacy but useful delegate syntax and when you may encounter it.",priority:"good",weight:.5,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/delegate-operator"},
{number:36,title:"Method groups",description:"Understand method-group conversion to delegates and Func/Action parameters.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/conversions"}
]},
{id:"phase-05",phase:"Phase 05",title:"LINQ",icon:"🔎",weight:12,topics:[
{number:37,title:"Where and Select",description:"Filtering and projection — the two LINQ operations you use constantly.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/"},
{number:38,title:"SelectMany",description:"Flatten nested sequences and understand one-to-many projection.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.selectmany"},
{number:39,title:"OrderBy and ThenBy",description:"Primary and secondary sorting.",priority:"must",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.orderby"},
{number:40,title:"First, Single and their OrDefault variants",description:"Know the semantic and exception differences between these operators.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/"},
{number:41,title:"Any, All and Contains",description:"Existence and predicate-based checks.",priority:"must",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/"},
{number:42,title:"GroupBy",description:"Grouping and aggregation patterns.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.groupby"},
{number:43,title:"Join and GroupJoin",description:"Combine related sequences and understand inner joins conceptually.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/standard-query-operators/join-operations"},
{number:44,title:"Aggregate, Sum, Count and Average",description:"Common aggregation operators and their overloads.",priority:"must",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/standard-query-operators/aggregation-operations"},
{number:45,title:"Deferred execution",description:"Understand when a LINQ query actually executes.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/"},
{number:46,title:"IEnumerable vs IQueryable",description:"In-memory delegates versus provider-translated expression trees.",priority:"must",weight:1.5,url:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/"}
]},
{id:"phase-06",phase:"Phase 06",title:"Exceptions & Resource Management",icon:"🛡️",weight:8,topics:[
{number:47,title:"try, catch and finally",description:"Exception flow and guaranteed cleanup.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/"},
{number:48,title:"throw vs throw ex",description:"Preserve the original stack trace when rethrowing exceptions.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/exception-handling-statements"},
{number:49,title:"Custom exceptions",description:"When and how to define domain-specific exception types.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/standard/exceptions/how-to-create-user-defined-exceptions"},
{number:50,title:"Exception filters",description:"Use when conditions on catch clauses need to be expressed cleanly.",priority:"should",weight:.5,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/exception-handling-statements"},
{number:51,title:"IDisposable",description:"Deterministic cleanup for unmanaged and scarce resources.",priority:"must",weight:1.5,url:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},
{number:52,title:"using statement and declaration",description:"Reliable disposal syntax and scope behavior.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using"},
{number:53,title:"IAsyncDisposable",description:"Async cleanup and await using.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-disposeasync"},
{number:54,title:"Finalizers",description:"Understand what finalizers do, why they are nondeterministic and why to avoid them unless necessary.",priority:"good",weight:.5,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/finalizers"}
]},
{id:"phase-07",phase:"Phase 07",title:"Async & Concurrency",icon:"⚡",weight:12,topics:[
{number:55,title:"Task and Task<T>",description:"The core abstraction for asynchronous work in modern .NET.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"},
{number:56,title:"async and await",description:"How asynchronous methods suspend and resume without blocking the calling thread.",priority:"must",weight:1.5,url:"https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios"},
{number:57,title:"Task.WhenAll",description:"Run independent asynchronous operations concurrently and await them together.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.whenall"},
{number:58,title:"Task.WhenAny",description:"Continue when the first task completes.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.whenany"},
{number:59,title:"CancellationToken",description:"Cooperative cancellation across async operations.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/standard/threading/cancellation-in-managed-threads"},
{number:60,title:"Async pitfalls",description:"Blocking on async, .Result, .Wait(), fire-and-forget and lost exceptions.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"},
{number:61,title:"Thread vs Task",description:"Understand the difference between threads, tasks and asynchronous I/O.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/standard/threading/threads-and-threading"},
{number:62,title:"lock and synchronization",description:"Protect shared mutable state and understand contention.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/lock"},
{number:63,title:"Concurrent collections",description:"Use thread-safe collections instead of manually synchronizing ordinary collections.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/standard/collections/thread-safe/"}
]},
{id:"phase-08",phase:"Phase 08",title:"Memory Management",icon:"🧠",weight:14,topics:[
{number:64,title:"Value types vs reference types",description:"Understand where semantics differ and how assignment/passing behaves.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types"},
{number:65,title:"Stack vs heap",description:"Build the correct mental model for storage, references and lifetimes without oversimplifying the runtime.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/standard/managed-code"},
{number:66,title:"Boxing and unboxing",description:"Understand conversions between value types and object/interface references and their allocation costs.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing"},
{number:67,title:"Garbage Collector",description:"What the managed GC does, when it runs and what it means for application performance.",priority:"must",weight:1.5,url:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/"},
{number:68,title:"GC generations",description:"Gen 0, Gen 1 and Gen 2 and why object survival affects collection cost.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals"},
{number:69,title:"Large Object Heap",description:"Understand large allocations, LOH behavior and why large objects can matter for performance.",priority:"should",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/large-object-heap"},
{number:70,title:"IDisposable vs garbage collection",description:"GC manages managed memory; IDisposable is for deterministic cleanup of resources.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},
{number:71,title:"WeakReference",description:"Know the purpose of weak references and their niche use cases.",priority:"good",weight:.5,url:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/weak-references"},
{number:72,title:"ref, in and out",description:"By-reference parameters, readonly references and avoiding unnecessary copies.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters"},
{number:73,title:"Span<T>",description:"Work with contiguous memory without unnecessary allocations or copies.",priority:"must",weight:1.5,url:"https://learn.microsoft.com/en-us/dotnet/api/system.span-1"},
{number:74,title:"Memory<T>",description:"A heap-friendly memory abstraction useful when spans cannot cross async boundaries.",priority:"should",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/standard/memory-and-spans/memory-t-usage-guidelines"},
{number:75,title:"String allocations",description:"String immutability, concatenation costs and when StringBuilder helps.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/standard/base-types/stringbuilder"},
{number:76,title:"Allocation and performance basics",description:"Recognize avoidable allocations, measure before optimizing and understand common hot paths.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/"}
]},
{id:"phase-09",phase:"Phase 09",title:"Modern C#",icon:"✨",weight:10,topics:[
{number:77,title:"Pattern matching",description:"Type, property, relational and logical patterns.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching"},
{number:78,title:"Switch expressions",description:"Concise expression-based branching with exhaustive patterns.",priority:"must",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/switch-expression"},
{number:79,title:"Records",description:"Immutable-by-default data modeling and value-based equality.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record"},
{number:80,title:"Record structs",description:"Value-type records and when they are appropriate.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record"},
{number:81,title:"Tuples and deconstruction",description:"Return and unpack multiple values cleanly.",priority:"must",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples"},
{number:82,title:"init and required members",description:"Express initialization contracts without mutable setters everywhere.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init"},
{number:83,title:"Nullable reference types",description:"Use compiler analysis to make nullability explicit and safer.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references"},
{number:84,title:"Primary constructors",description:"Modern concise constructor syntax for classes and structs.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/primary-constructors"},
{number:85,title:"IAsyncEnumerable<T>",description:"Stream asynchronous sequences with await foreach.",priority:"should",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/generate-consume-asynchronous-stream"}
]},
{id:"phase-10",phase:"Phase 10",title:"Advanced C#",icon:"🚀",weight:10,topics:[
{number:86,title:"Extension methods",description:"Add discoverable helper methods to existing types without modifying them.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods"},
{number:87,title:"yield return",description:"Build lazy iterators and understand deferred execution.",priority:"must",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/yield"},
{number:88,title:"Expression trees",description:"Represent code as data and understand why IQueryable uses them.",priority:"should",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/"},
{number:89,title:"Reflection",description:"Inspect types and members at runtime; know the trade-offs.",priority:"should",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/reflection-and-attributes/"},
{number:90,title:"Attributes",description:"Attach metadata and consume it through reflection or frameworks.",priority:"must",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/reflection-and-attributes/"},
{number:91,title:"Variance",description:"Understand covariance and contravariance with generic interfaces and delegates.",priority:"should",weight:1,url:"https://learn.microsoft.com/en-us/dotnet/standard/generics/covariance-and-contravariance"},
{number:92,title:"Pattern-based APIs and performance",description:"Recognize modern compiler/runtime patterns such as Span-based APIs and ref structs.",priority:"advanced",weight:.75,url:"https://learn.microsoft.com/en-us/dotnet/standard/memory-and-spans/"},
{number:93,title:"Source generators awareness",description:"Know what compile-time code generation is and where .NET uses it.",priority:"advanced",weight:.5,url:"https://learn.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview"},
{number:94,title:"C# performance mindset",description:"Measure first, understand allocations and choose clarity before premature optimization.",priority:"must",weight:1.25,url:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/"}
]}
];
ROADMAP.forEach(p=>p.topics.forEach(t=>{t.id=`topic-${String(t.number).padStart(3,"0")}`;}));
