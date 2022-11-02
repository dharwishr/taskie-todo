class ArraysController < ApplicationController
    skip_before_action :authenticate_user_using_x_auth_token, only: :create

    def create
        input = Array.wrap(params[:input_array])
        output = generate_max_subarray input
        render json: output, status: 200
    end

    private

        def generate_max_subarray (array)
            max_subarray = []
            max_sum = 0
            for i in 0..(array.length + 1)
                for j in (i+1)..(array.length + 1)
                    sub = array[i..j]
                    if sub.sum.to_i > max_sum.to_i
                        max_sum = sub.sum.to_i
                        max_subarray = sub 
                    end
                end
            end
            return max_subarray
        end
end
