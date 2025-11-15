// [rUNCCore]
export namespace rUNC
{
  // [rUNCCore::Score]
   export namespace Score
   {
     // [rUNCCore::Score::Results]
      export interface runc_results
      {
          time_passed: number,
          tests_passed: number,
          tests_failed: number,
      
          test_failures: Record<string, string>
      }
   }
}
