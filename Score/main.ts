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
     // [rUNCCore::Score::CEResultsEngine]
     export let runc_results: runc_results =
     {
          time_passed: 0,
          tests_passed: 0,
          tests_failed: 0,
      
          test_failures: {}
     }

     // [rUNCCore::Score::GetScore()]
     export const r_get_score = (): number => (Score.runc_results.tests_passed / (Score.runc_results.tests_passed + Score.runc_results.tests_failed)) * 100;
   }
}
