require "test_helper"

class ArraysControllerTest < ActionDispatch::IntegrationTest

  def test_check_if_returning_sub_array_with_max_possible_sum_is_right
    post arrays_path, params: {
      input_array: [-1, 2, -3, 1, 0, 3]
    }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json, ["1","0","3"]
  end

end
